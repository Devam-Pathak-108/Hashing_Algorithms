export const paddingBits = async (text: string): Promise<string> => {
  //Pad with 0’s until data is a multiple of 512, less 64 bits
  var temp: string = text;
  temp = temp + "1";

  var tempdata = 448 - (temp.length % 512);
  // if templength is between 448 - 512
  if (tempdata < 0) {
    tempdata = 448 + (64-Math.abs(tempdata));
  }
  var arrayOf0s = [...Array(tempdata).keys()].map((temp) => "0");

  var padded = temp + arrayOf0s.join("");
  // Append 64 bits to the end, where the 64 bits are a big-endian integer representing the length of the original input in binary.
  //basically a 64 bit string ending with binary of length of text
  var lengthToPad = 64 - (text.length >>> 0).toString(2).length;
  var arrayOf0sLength = [...Array(lengthToPad).keys()].map((temp) => "0");
  //our 512 bit string
  return padded + arrayOf0sLength.join("") + (text.length >>> 0).toString(2);
};
