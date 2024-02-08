import { convertToBlocks } from "./components/convertToBlock";
import { StringToBinary } from "./components/convertToBinary";
import { paddingBits } from "./components/padWith0s";
import { GetW_blocks } from "./components/GetW_Blocks";
import { hashConstants } from "./Constants";

export const GetHash = async (text: string) => {
  var binary = await StringToBinary(text);
  var padded = await paddingBits(binary);
  var blocksOf512bits = await convertToBlocks(padded, 512);
  var H0 = hashConstants.h0;
  var H1 = hashConstants.h1;
  var H2 = hashConstants.h2;
  var H3 = hashConstants.h3;
  var H4 = hashConstants.h4;
  var H5 = hashConstants.h5;
  var H6 = hashConstants.h6;
  var H7 = hashConstants.h7;

  for (var i of blocksOf512bits) {
    //converting the blocks to 32 bit block array
    var M_blockOf32 = await convertToBlocks(i, 32);
    //padding with calculations and getting 64, 32 bit word long array
    var W_blocks = await GetW_blocks(M_blockOf32);
    //initializing variables for computation
    var a=H0
    var b=H1
    var c=H2
    var d=H3
    var e=H4
    var f=H5
    var g=H6
    var h=H7
  }
};
