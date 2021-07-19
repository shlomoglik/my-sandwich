export const sortDocsBy = (param, type = "number") => {
  if (type === "string") return (a, b) => (a[param] > b[param] ? 1 : -1);
  return (a, b) => parseInt(a[param]) - parseInt(b[param]);
};
