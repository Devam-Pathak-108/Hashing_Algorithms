import { addBinary } from "./addBinary";
import { xor } from "./gates";

export const GetW_blocks = async (Bit32Blocks: string[]) => {
  var W_blocks = Bit32Blocks;
  const temp = addBinary(addBinary(
    addBinary(await sigma1(W_blocks[14]), W_blocks[9]),
   await sigma0(W_blocks[1])
  ),W_blocks[0])
  console.log(
    temp.length
  );
  // for(var i = W_blocks.length ; i<64 ; i++){

  // }
};

const sigma1 = async (text: string) => {
  var temp = "";
  var value1 = rotateRight(text, 17);
  var value2 = rotateRight(text, 19);
  var value3 = shiftRight(text, 10);
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
  var value1 = rotateRight(text, 7);
  var value2 = rotateRight(text, 18);
  var value3 = shiftRight(text, 3);
  for (var i = 0; i < text.length; i++) {
    temp += xor(value1[i], value2[i]);
  }
  var result = "";
  for (var j = 0; j < text.length; j++) {
    result += xor(temp[j], value3[j]);
  }
  return result;
};

const rotateRight = (text: string, movement: number) => {
  //right rotation
  return text.slice(-movement) + text.slice(0, -movement);
};
const shiftRight = (text: string, movement: number) => {
  //right shift
  return (
    [...Array(movement).keys()].map((temp) => "0").join("") +
    text.slice(0, -movement)
  );
};
