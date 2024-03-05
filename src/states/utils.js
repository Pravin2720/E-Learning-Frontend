export const sessionStorageEffect =
  (key) =>
  ({ onSet }) => {
    onSet((newValue) => {
      if (newValue !== null && newValue !== undefined) {
        sessionStorage.setItem(key, JSON.stringify(newValue));
      } else {
        sessionStorage.setItem(key, null);
        sessionStorage.removeItem(key);
      }
    });
  };
