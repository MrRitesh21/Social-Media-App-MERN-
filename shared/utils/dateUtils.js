const dateUtils = {
    formatDateTime: (date) => {
      return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }).format(date);
    },
  
    formatDate: (date) => {
      return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }).format(date);
    },
  
    formatTime: (date) => {
      return new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }).format(date);
    },
  
    addDays: (date, days) => {
      return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
    },
  
    subtractDays: (date, days) => {
      return new Date(date.getTime() - days * 24 * 60 * 60 * 1000);
    },
  };
  
  export default dateUtils;