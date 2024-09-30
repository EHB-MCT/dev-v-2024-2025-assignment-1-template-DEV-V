/**
 * Format a date string to 'MM/DD/YYYY' format.
 * @param {string} date - Date string
 * @returns {string} Formatted date string
 */
export const formatDate = (date) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(date).toLocaleDateString(undefined, options);
  };
  