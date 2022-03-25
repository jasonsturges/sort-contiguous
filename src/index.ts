export enum SortType {
  PREFIX = "prefix",
  SUFFIX = "suffix",
}

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
export const contiguousPrefixComparer = (a: string, b: string) => {
  let x = regPrefix.exec(a);
  let y = regPrefix.exec(b);

  return (
    a.slice(x?.index ?? 0).localeCompare(b.slice(y?.index ?? 0)) || //
    Number(a.slice(0, x?.index)) - Number(b.slice(0, y?.index))
  );
};

/**
 * Sort comparer function for contiguous suffix.
 */
export const contiguousSuffixComparer = (a: string, b: string) => {
  let x = regSuffix.exec(a);
  let y = regSuffix.exec(b);

  return (
    a.slice(0, x?.index).localeCompare(b.slice(0, y?.index)) || //
    Number(a.slice(x?.index ?? 0)) - Number(b.slice(y?.index ?? 0))
  );
};

/**
 * Compare numerical values by specifying which comparer type to use.
 */
export const sortContiguous = (list: string[], type: SortType = SortType.SUFFIX) => {
  switch (type) {
    case SortType.PREFIX:
      return sortContiguousPrefix(list);

    default:
    case SortType.SUFFIX:
      return sortContiguousSuffix(list);
  }
};

/**
 * Compare numerical values at the beginning of a list using the contiguous prefix comparer.
 */
export const sortContiguousPrefix = (list: string[]) => {
  return list.sort(contiguousPrefixComparer);
};

/**
 * Compare numerical values at the end of a list using the contiguous suffix comparer.
 */
export const sortContiguousSuffix = (list: string[]) => {
  return list.sort(contiguousSuffixComparer);
};
