/**
 * Prefix regular expression
 * @type {RegExp}
 */
const regPrefix = /\D/;

/**
 * Suffix regular expression
 * @type {RegExp}
 */
const regSuffix = /\d+$/;

/**
 * Sort comparer function for contiguous prefix.
 */
export const contiguousPrefixComparer = (a, b) => {
  let x = regPrefix.exec(a);
  let y = regPrefix.exec(b);

  return a.slice(x.index).localeCompare(b.slice(y.index)) ||
         a.slice(0, x.index) - b.slice(0, y.index);
}

/**
 * Sort comparer function for contiguous suffix.
 */
export const contiguousSuffixComparer = (a, b) => {
  let x = regSuffix.exec(a);
  let y = regSuffix.exec(b);

  return a.slice(0, x.index).localeCompare(b.slice(0, y.index)) ||
         a.slice(x.index) - b.slice(y.index);
}

/**
 * @param {String[]} list - List to be sorted contiguously.
 */
export const sortContiguousPrefix = (list) => {
  return list.sort(contiguousPrefixComparer);
}

/**
 * @param {String[]} list - List to be sorted contiguously.
 */
export const sortContiguousSuffix = (list) => {
  return list.sort(contiguousSuffixComparer);
}
