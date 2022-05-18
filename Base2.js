export const Base2 = {
  encode: (b) => Array.from(b).map(n => n.toString(2)).map(s => "0000000" + s).map(s => s.substring(s.length - 8)).join(""),
  decode: (s) => new Uint8Array(Array.from(s).filter(n => n == "0" || n == "1").join("").split(/(.{8})/).filter(s => s).map(s => parseInt(s, 2))),
};
