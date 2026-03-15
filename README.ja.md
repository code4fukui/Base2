# Base2 - 01 エンコーディング

- Base2ライブラリ
- Web及び[Deno](https://deno.land)向けのESモジュール

## デモ

https://code4fukui.github.io/Base2/

## 機能

- バイナリデータの"0"と"1"からなる文字列への変換と復元
- 簡単な`encode`及び`decode`関数によるAPI
- Webとデノ環境の両方に対応

## 使い方

```js
import { Base2 } from "https://code4fukui.github.io/Base2/Base2.js";

console.log(Base2.encode(new Uint8Array([1, 2, 0xfe, 0xff])));
console.log(Base2.decode("00000001000000101111111011111111"));

console.log(Base2.encode(new TextEncoder().encode("IchigoJam")));
console.log(new TextDecoder().decode(Base2.decode("010010010110001101101000011010010110011101101111010010100110000101101101")));
```

## ライセンス

MIT License