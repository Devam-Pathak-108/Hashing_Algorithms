import { BinaryToHex, ConvertToBlocks } from "./components/convertions";
import { HexToBinary, StringToBinary } from "./components/convertions";
import { paddingBits } from "./components/padWith0s";
import { GetW_blocks } from "./components/GetW_Blocks";
import { hashConstants } from "./Constants";
import { Compression } from "./components/Compression";
import { addBinary } from "./components/addBinary";

export const GetHash = async (text: string) => {
  var binary = await StringToBinary(text);
  var padded = await paddingBits(binary);
  var blocksOf512bits = await ConvertToBlocks(padded, 512);
  var H0 = await HexToBinary(hashConstants.h0);
  var H1 = await HexToBinary(hashConstants.h1);
  var H2 = await HexToBinary(hashConstants.h2);
  var H3 = await HexToBinary(hashConstants.h3);
  var H4 = await HexToBinary(hashConstants.h4);
  var H5 = await HexToBinary(hashConstants.h5);
  var H6 = await HexToBinary(hashConstants.h6);
  var H7 = await HexToBinary(hashConstants.h7);

  for (var i of blocksOf512bits) {
    //converting the blocks to 32 bit block array
    var M_blockOf32 = await ConvertToBlocks(i, 32);
    //padding with calculations and getting 64, 32 bit word long array
    var W_blocks = await GetW_blocks(M_blockOf32);
    //initializing variables for computation
    var a = H0;
    var b = H1;
    var c = H2;
    var d = H3;
    var e = H4;
    var f = H5;
    var g = H6;
    var h = H7;
    // Compression of all the bits
    var result = await Compression(W_blocks, a, b, c, d, e, f, g, h);
    a = result.a;
    b = result.b;
    c = result.c;
    d = result.d;
    e = result.e;
    f = result.f;
    g = result.g;
    h = result.h;
    // manipulating hash values
    H0 = await addBinary(H0,a)
    H1 = await addBinary(H1,b)
    H2 = await addBinary(H2,c)
    H3 = await addBinary(H3,d)
    H4 = await addBinary(H4,e)
    H5 = await addBinary(H5,f)
    H6 = await addBinary(H6,g)
    H7 = await addBinary(H7,h)
  }
  const AnsInBinary = H0+H1+H2+H3+H4+H5+H6+H6+H7
  const HashValue = await BinaryToHex(AnsInBinary)
  return HashValue
};
