import dayjs from 'dayjs';
// import advancedFormat from 'dayjs/plugin/advancedFormat';

// dayjs.extend(advancedFormat);

export function formatTimestamp(timestamp) {
  return dayjs(timestamp).format('MMMM D, YYYY [at] h:mm A');
}