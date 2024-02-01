export const convertToBlocks = async (text: string,blockSize:number): Promise<string[]> => {
  //converts string to array with 512 length each
  var tempText: string = text;
  var blocks: string[] = [];
  for (var i = 0; i < text.length / blockSize; i++) {
    blocks.push(tempText.slice(0, blockSize));
    tempText = tempText.slice(blockSize);
  }
  return blocks;
};
