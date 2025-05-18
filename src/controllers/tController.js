import { Thought, User } from '../models/index.js';

export const createThought = async (req, res) => {
    try {
        const thought = await Thought.create(req.body);
        const user = await User.findByIdAndUpdate(
            req.body.userId,
            { $push: { thoughts: thought._id } },
            { new: true }
        );
        res.status(201).json({ thought, user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getAllThoughts = async (req, res) => {
    try {
        const thoughts = await Thought.find().populate('userId');
        res.status(200).json(thoughts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getThoughtById = async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.thoughtId);
        if (!thought) {
            return res.status(404).json({ message: 'Thought not found' });
        }
        res.status(200).json(thought);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const updateThought = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, { new: true });
        if (!thought) {
            return res.status(404).json({ message: 'Thought not found' });
        }
        res.status(200).json(thought);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteThought = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndDelete(req.params.thoughtId);
        if (!thought) {
            return res.status(404).json({ message: 'Thought not found' });
        }
        await User.findByIdAndUpdate(
            thought.userId,
            { $pull: { thoughts: thought._id } },
            { new: true }
        );
        res.status(200).json({ message: 'Thought deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const addReaction = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndUpdate(
            req.params.thoughtId,
            { $addToSet: { reactions: req.body } },
            { new: true }
        );
        if (!thought) {
            return res.status(404).json({ message: 'Thought not found' });
        }
        res.status(200).json(thought);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteReaction = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndUpdate(
            req.params.thoughtId,
            { $pull: { reactions: { reactionId: req.params.reactionId } } },
            { new: true }
        );
        if (!thought) {
            return res.status(404).json({ message: 'Thought not found' });
        }
        res.status(200).json(thought);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
// This code defines the controller functions for handling requests related to thoughts in a social media application.