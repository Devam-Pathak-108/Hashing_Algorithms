import { Computation } from "./Computation";
import { convertToBlocks } from "./components/convertToBlock";
import { convertToBinary } from "./components/convertToBinary";
import { paddingBits } from "./components/padWith0s";

export const GetHash = async (text: string) => {
  var binary = await convertToBinary(text);
  var padded = await paddingBits(binary);
  var blocksOf512bits = await convertToBlocks(padded,512);
  var hashCode = Computation(blocksOf512bits);
};
