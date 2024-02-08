import { Kconstants } from "../Constants";
import { rotateRight } from "./GetW_Blocks";
import { addBinary } from "./addBinary";
import { HexToBinary } from "./convertions";
import { and, not, xor } from "./gates";

export const Compression = async (
  W_blocks: string[],
  a1: string,
  b1: string,
  c1: string,
  d1: string,
  e1: string,
  f1: string,
  g1: string,
  h1: string
) => {
  var a = a1;
  var b = b1;
  var c = c1;
  var d = d1;
  var e = e1;
  var f = f1;
  var g = g1;
  var h = h1;

  for (var i = 0; i < 64; i++) {
    var temp1 = await addBinary(
      h,
      await addBinary(
        await sigma1(e),
        await addBinary(
          await ch(e, f, g),
          await addBinary(await HexToBinary(Kconstants[i]), W_blocks[i])
        )
      )
    );

    var temp2 = await addBinary(await sigma0(a), await maj(a, b, c));

    h = g;
    g = f;
    f = e;
    e = await addBinary(d, temp1);
    d = c;
    c = b;
    b = a;
    a = await addBinary(temp1, temp2);
  }
  return { a, b, c, d, e, f, g, h };
};

const sigma1 = async (text: string) => {
  var temp = "";
  var value1 = rotateRight(text, 6);
  var value2 = rotateRight(text, 11);
  var value3 = rotateRight(text, 25);
  for (var i = 0; i < text.length; i++) {
    temp += xor(value1[i], value2[i]);
  }
  var result = "";
  for (var j = 0; j < text.length; j++) {
    result += xor(temp[j], value3[j]);
  }
  return result;
};
const sigma0 = async (text: string) => {
  var temp = "";
  var value1 = rotateRight(text, 2);
  var value2 = rotateRight(text, 13);
  var value3 = rotateRight(text, 22);

  for (var i = 0; i < text.length; i++) {
    temp += xor(value1[i], value2[i]);
  }
  var result = "";
  for (var j = 0; j < text.length; j++) {
    result += xor(temp[j], value3[j]);
  }
  return result;
};

const ch = async (e: string, f: string, g: string) => {
  var temp: string = "";
  for (var i = 0; i < 32; i++) {
    temp += xor(and(e[i], f[i]), and(not(e[i]), g[i]));
  }
  return temp;
};
const maj = async (a: string, b: string, c: string) => {
  var temp: string = "";
  for (var i = 0; i < 32; i++) {
    temp += xor(and(a[i], b[i]), xor(and(a[i], c[i]), and(b[i], c[i])));
  }
  return temp;
};
