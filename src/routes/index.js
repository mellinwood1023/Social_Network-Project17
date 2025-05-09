import { Router } from 'express';
import apiRoutes from './api/index.js';

const router = Router();

router.use('/api', apiRoutes);
router.use((req, res) => {
    res.status(404).send('<h1>404 Error!</h1>');
});

export default router;
// This code sets up the main router for the application. It imports the API routes and uses them under the '/api' path.
//  If a request does not match any defined routes, it sends a 404 error response with a message.