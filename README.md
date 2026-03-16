# Base2 - 01 encoding

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

## Features
- Encode and decode binary data to/from a string of "0" and "1" characters.
- Simple API with `encode` and `decode` functions.
- Compatible with both web and Deno environments.

## Usage
```js
import { Base2 } from "https://code4fukui.github.io/Base2/Base2.js";

console.log(Base2.encode(new Uint8Array([1, 2, 0xfe, 0xff])));
console.log(Base2.decode("00000001000000101111111011111111"));

console.log(Base2.encode(new TextEncoder().encode("IchigoJam")));
console.log(new TextDecoder().decode(Base2.decode("010010010110001101101000011010010110011101101111010010100110000101101101")));
```

## Demo
https://code4fukui.github.io/Base2/

## Testing
```
deno test
```

## License
MIT License — see [LICENSE](LICENSE).