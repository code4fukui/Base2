import * as t from "https://deno.land/std/testing/asserts.ts";
import { Base2 } from "./Base2.js";

Deno.test("encode", () => {
  t.assertEquals(Base2.encode(new Uint8Array([1, 2, 3])), "000000010000001000000011");
  t.assertEquals(Base2.encode(new Uint8Array([])), "");
  t.assertEquals(Base2.encode(new Uint8Array([0])), "00000000");
  t.assertEquals(Base2.encode(new Uint8Array([255])), "11111111");  
});
Deno.test("decode", () => {
  t.assertEquals(Base2.decode("000000010000001000000011"), new Uint8Array([1, 2, 3]));
});
