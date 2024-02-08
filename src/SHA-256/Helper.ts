import { convertToBlocks } from "./components/convertToBlock";
import { convertToBinary } from "./components/convertToBinary";
import { paddingBits } from "./components/padWith0s";
import { GetW_blocks } from "./components/GetW_Blocks";

export const GetHash = async (text: string) => {
  var binary = await convertToBinary(text);
  var padded = await paddingBits(binary);
  var blocksOf512bits = await convertToBlocks(padded,512);
  for ( var i of blocksOf512bits){
    var M_blockOf32 = await convertToBlocks(i,32)
    var W_blocks = await GetW_blocks(M_blockOf32)
    }
};
