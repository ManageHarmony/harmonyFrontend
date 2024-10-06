export const truncateText = (text, maxLength) => {
    if (!text) return ''; 
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    }
    return text;
  };
  