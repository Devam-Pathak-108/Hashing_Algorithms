export const convertToBinary = async (text: string): Promise<string> => {
  //converting the text to binary
  var temp: string = "";
  for (var i of text) {
    temp += ("00000000"+i.charCodeAt(0).toString(2)).slice(-8);
  }
  return temp;
};
