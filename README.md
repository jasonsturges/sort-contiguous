# Sort Contiguous

Contiguous list sorting, similar to macOS Finder sort.

For example, an array of: `["N1", "N10", "N100", "N2"]`

...would sort using the numerical suffix values, resulting in:

    0: "N1"
    1: "N2"
    2: "N10"
    3: "N100"


# Getting Started

To install, execute:

    npm i sort-contiguous

Then, import into a project as:

```js
import {
  contiguousPrefixComparer,
  contiguousSuffixComparer,
  sortContiguousPrefix,
  sortContiguousSuffix
} from 'sort-contiguous'
```


# Usage

This package includes both sort comparer and utility functions for array sorting.

## Using a Sort Comparer

Use the comparer functions directly in your array `sort()` operations:

### Suffix Comparer

Compare numerical values at the end of a list using the contiguous suffix comparer:

```js
import { contiguousSuffixComparer } from 'sort-contiguous';

const list = [
  "File 1",
  "File 10",
  "File 100",
  "File 2"
];

let sorted = list.sort(contiguousSuffixComparer);
console.log(sorted);
```

Outputs:

    0: "File 1"
    1: "File 2"
    2: "File 10"
    3: "File 100"

### Prefix Comparer

Compare numerical values at the beginning of a list using the contiguous prefix comparer:

```js
import { contiguousPrefixComparer } from 'sort-contiguous';

const list = [
  "1 File",
  "10 File",
  "100 File",
  "2 File"
];

let sorted = list.sort(contiguousPrefixComparer);
console.log(sorted);
```

Outputs:

    0: "1 File"
    1: "2 File"
    2: "10 File"
    3: "100 File"


## Using as a Function

Sort your array by calling either the prefix or suffix sort functions, and passing your array as a parameter.

### Suffix Sort

Compare numerical values at the end of a list by calling `sortContiguousSuffix()` to return the sorted array:

```js
import { sortContiguousSuffix } from 'sort-contiguous';

const list = [
  "File 1",
  "File 10",
  "File 100",
  "File 2"
];

let sorted = sortContiguousSuffix(list);
console.log(sorted);
```

Outputs:

    0: "File 1"
    1: "File 2"
    2: "File 10"
    3: "File 100"

### Prefix Sort

Compare numerical values at the beginning of a list by calling `sortContiguousPrefix()` to return the sorted array:

```js
import { sortContiguousPrefix } from 'sort-contiguous';

const list = [
  "1 File",
  "10 File",
  "100 File",
  "2 File"
];

let sorted = sortContiguousPrefix(list);
console.log(sorted);
```

Outputs:

    0: "1 File"
    1: "2 File"
    2: "10 File"
    3: "100 File"
