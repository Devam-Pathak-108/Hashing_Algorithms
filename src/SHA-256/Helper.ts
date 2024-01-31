export const GetHash = async (text: string) => {
  var binary = await convertToBinary(text);
  var padded = await paddingBits(binary);
  console.log(padded.length);
};

const convertToBinary = async (text: string) => {
  //converting the text to binary
  var temp: string = "";
  for (var i of text) {
    temp += i.charCodeAt(0).toString(2);
  }
  return temp;
};

const paddingBits = async (text: string) => {
  //Pad with 0’s until data is a multiple of 512, less 64 bits
  var temp: string = text;
  temp = temp + "1";

  const tempdata = 448 - (temp.length % 512);

  var arrayOf0s = [...Array(tempdata).keys()].map((temp) => "0");

  var padded = temp + arrayOf0s.join("");


  // Append 64 bits to the end, where the 64 bits are a big-endian integer representing the length of the original input in binary.
  //for converting in big-endian integer

  async function bin2int(bin: string) {
    var i = 0;
    var len = bin.length;
    var num = 0;
    while (i < len) {
      num <<= 8;
      num += bin.charCodeAt(i);
      i++;
    }
    return num.toString(2);
  }

 return padded + await bin2int((text.length >>> 0).toString(2));

  
};
