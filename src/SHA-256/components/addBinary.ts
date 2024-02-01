import { fullAdder } from "./fullAdder";
import { halfAdder } from "./halfAdder";

export function addBinary(a:string, b:string){

    let sum = '';
    let carry = '';
  
    for(var i = a.length-1;i>=0; i--){
      if(i == a.length-1){
        //half add the first pair
        const halfAdd1 = halfAdder(a[i],b[i]);
        sum = halfAdd1[0]+sum;
        carry = halfAdd1[1];
      }else{
        //full add the rest
        const fullAdd = fullAdder(a[i],b[i],carry);
        sum = fullAdd[0]+sum;
        carry = fullAdd[1];
      }
    }
  
    return carry ? carry + sum : sum;
  }