import { rotateRight } from "./GetW_Blocks";
import { xor } from "./gates";

export const Compression = async (
  W_blocks: string[],
  a: string,
  b: string,
  c: string,
  d: string,
  e: string,
  f: string,
  g: string,
  h: string
) => {
  for (var i of W_blocks) {
  }
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
  var value3 = rotateRight(text,22);

  for (var i = 0; i < text.length; i++) {
    temp += xor(value1[i], value2[i]);
  }
  var result = "";
  for (var j = 0; j < text.length; j++) {
    result += xor(temp[j], value3[j]);
  }
  return result;
};
