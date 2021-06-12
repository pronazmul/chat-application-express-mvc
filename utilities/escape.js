/**
 * Title : Escape Expression Function
 * Description: This Function is used to replace string expression to escaped
 */
const escape = (str) => str.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");

// Module Export
module.exports = escape;
