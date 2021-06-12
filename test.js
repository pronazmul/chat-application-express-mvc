const text = "nazmul@gmail.com";
const filtered = text.replace("+880", "");

const escapeFilter = (str) => str.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");

const unique = new RegExp("^" + escapeFilter(filtered) + "$", "i");

// new RegExp("^" + escape(searchQuery) + "$", "i");

console.log(unique);
