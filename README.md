# 🧹🚪 broom-closet

Useful functions. That's all.

## Functions

### tryCatch(fn)

Calls fn and catches any exceptions, returning an array, `[error, result]` with the possible caught error as the first item and the result of the function as the second item. Handy for more implicit control flow and avoiding the scope issues `try/catch` blocks sometimes cause.

Works as both async or sync.

Example:

```
import tryCatch from "broom-closet/try-catch";
import { fs } from "node:fs/promises";

const [error, result] = tryCatch(mightThrow());
const [error, stat] = await tryCatch(fs.stat("/path/to/file"));
```
