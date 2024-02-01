import { and, xor } from "./gates";

export function halfAdder(a:string, b:string){
    //half added logic
    const sum = xor(a,b);
    const carry = and(a,b);
    return [sum, carry];
  }