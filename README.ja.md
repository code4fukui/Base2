# Base2 - 01 エンコーディング

Base2は、バイナリデータを"0"と"1"からなる文字列に変換および元の状態に復元するためのライブラリです。Web環境とDeno環境の両方に対応しています。

## 機能

- バイナリデータを"0"と"1"の文字列にエンコードし、その文字列をデコードして元のバイナリデータを復元できます
- `encode`および`decode`の2つの簡単な関数から成るAPIを提供しています

## 使い方

```js
import { Base2 } from "https://code4fukui.github.io/Base2/Base2.js";

console.log(Base2.encode(new Uint8Array([1, 2, 0xfe, 0xff]))); // 00000001000000101111111011111111
console.log(Base2.decode("00000001000000101111111011111111")); // Uint8Array [1, 2, 254, 255]

console.log(Base2.encode(new TextEncoder().encode("IchigoJam"))); // 010010010110001101101000011010010110011101101111010010100110000101101101
console.log(new TextDecoder().decode(Base2.decode("010010010110001101101000011010010110011101101111010010100110000101101101"))); // IchigoJam
```

## ライセンス

MIT License