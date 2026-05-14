# Base2 - 01エンコーディング

## 機能
- バイナリデータと「0」「1」の文字列を相互にエンコード・デコードします。
- `encode`および`decode`関数によるシンプルなAPI。
- Web環境とDeno環境の両方に対応しています。

## 使い方
```js
import { Base2 } from "https://code4fukui.github.io/Base2/Base2.js";

console.log(Base2.encode(new Uint8Array([1, 2, 0xfe, 0xff])));
console.log(Base2.decode("00000001000000101111111011111111"));

console.log(Base2.encode(new TextEncoder().encode("IchigoJam")));
console.log(new TextDecoder().decode(Base2.decode("010010010110001101101000011010010110011101101111010010100110000101101101")));
```

## デモ
https://code4fukui.github.io/Base2/

## テスト
```
deno test
```

## ライセンス
MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
