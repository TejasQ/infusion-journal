export const getTwoDaysAgo = () => {
  const today = new Date();
  const twoDaysAgo = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 2);
  return twoDaysAgo.getTime();
};
