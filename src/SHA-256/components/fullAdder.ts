import { and, or, xor } from "./gates";
import { halfAdder } from "./halfAdder";

export function fullAdder(a:string, b:string, carry:string){
    // full adder logics
    var halfAdd = halfAdder(a,b);
    const sum = xor(carry, halfAdd[0]);
    carry = and(carry, halfAdd[0]);
    carry = or(carry, halfAdd[1]);
    return [sum, carry];
  }