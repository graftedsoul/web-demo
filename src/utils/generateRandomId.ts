export const generateRandomId = (idPrefix: string) => {
  const num = Math.floor(Math.random() * (50000 - 30000 + 1)) + 30000;
  return idPrefix + '_' + num;
};
