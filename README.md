# 🧹🚪 broom-closet

Useful functions. That's all.

## Installation

```
npm install broom-closet
```

## Functions

### tryCatch(fn)

Calls fn and catches any exceptions, returning an array, `[error, result]` with the possible caught error as the first item and the result of the function as the second item. Handy for more implicit control flow and avoiding the scope issues `try/catch` blocks sometimes cause.

Works as both async or sync.

Example:

```js
import tryCatch from "broom-closet/try-catch";
import { fs } from "node:fs/promises";

const [error, result] = tryCatch(mightThrow());
const [error, stat] = await tryCatch(fs.stat("/path/to/file"));
```

*Added in v0.0.1*

### prepareArgs(fn, ...args)



Prepare a function for future calls by handing it some parameters. This is sort
of like currying, except that there's no accounting for number of arguments.

Example:

```js
function sum(x, y) {
  return x + y;
}

const addOne = prepareArgs(sum, 1);
addOne(8); // returns 9
```

*Added in v0.0.1*
