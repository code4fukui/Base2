# Base2 - 01 encoding

- Base2 library
- ES module for web and [Deno](https://deno.land)

## alphabet

"0" or "1"

## sample app

https://code4fukui.github.io/Base2/

## usage

```js
import { Base2 } from "https://code4fukui.github.io/Base2/Base2.js";

console.log(Base2.encode(new Uint8Array([1, 2, 0xfe, 0xff])));
console.log(Base2.decode("00000001000000101111111011111111"));

console.log(Base2.encode(new TextEncoder().encode("IchigoJam")));
console.log(new TextDecoder().decode(Base2.decode("010010010110001101101000011010010110011101101111010010100110000101101101")));
```

## sample implementation in IchigoJam BASIC

```
10 S="IchigoJam"
20 FORI=0TOLEN(S)-1:?BIN$(PEEK(S+I),8);:NEXT:?
```
