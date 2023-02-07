export const camelCaseToTitleCase = (text) => {
  const result = text.replace(/([A-Z])/g, ' $1');
  return result.charAt(0).toUpperCase() + result.slice(1);
};

export const snakeCaseToTitleCase = (text) =>
  text.replace(/^_*(.)|_+(.)/g, (s, c, d) => (c ? c.toUpperCase() : ` ${d.toUpperCase()}`));
