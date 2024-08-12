type Serializable = string | number | boolean | object | null;

const localStorageUtil = {
  setItem: (key: string, value: Serializable) => {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error("Error setting item in localStorage:", error);
    }
  },

  getItem: (key: string) => {
    try {
      const serializedValue = localStorage.getItem(key);
      return serializedValue ? JSON.parse(serializedValue) : null;
    } catch (error) {
      console.error("Error getting item from localStorage:", error);
      return null;
    }
  },
};

export default localStorageUtil;
