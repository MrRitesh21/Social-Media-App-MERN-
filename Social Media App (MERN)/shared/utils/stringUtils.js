const stringUtils = {
    truncateString: (str, length) => {
      return str.length > length ? str.substring(0, length) + '...' : str;
    },
  
    capitalizeFirstLetter: (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
  
    lowercaseFirstLetter: (str) => {
      return str.charAt(0).toLowerCase() + str.slice(1);
    },
  
    removeWhitespace: (str) => {
      return str.replace(/\s+/g, '');
    },
  
    removeSpecialCharacters: (str) => {
      return str.replace(/[^a-zA-Z0-9]/g, '');
    },
  
    trim: (str) => {
      return str.trim();
    },
  };
  
  export default stringUtils;