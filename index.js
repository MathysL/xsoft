module.exports = function xsoft(string) {
  if (typeof string !== "string") throw new TypeError("XSOFT wants a string-utje!");
  return string.replace(/\s/g, "");
};
