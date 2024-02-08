export const StringToBinary = async (text: string): Promise<string> => {
  //converting the text to binary
  var temp: string = "";
  for (var i of text) {
    temp += ("00000000" + i.charCodeAt(0).toString(2)).slice(-8);
  }
  return temp;
};
export const HexToBinary = async (HexNumber: string) => {
  var temp: string = "";
  for (var i of HexNumber) {
    temp += ("00000000" + parseInt(i, 16).toString(2)).slice(-4);
  }
  return temp;
};
export const ConvertToBlocks = async (
  text: string,
  blockSize: number
): Promise<string[]> => {
  //converts string to array with 512 length each
  var tempText: string = text;
  var blocks: string[] = [];
  for (var i = 0; i < text.length / blockSize; i++) {
    blocks.push(tempText.slice(0, blockSize));
    tempText = tempText.slice(blockSize);
  }
  return blocks;
};
export const BinaryToHex = async (text: string) => {
  const convertToBlockof4 = await ConvertToBlocks(text, 4);
  var temp: string = "";
  for (var i of convertToBlockof4) {
    temp += parseInt(i, 2).toString(16);
  }
  return temp;
};
