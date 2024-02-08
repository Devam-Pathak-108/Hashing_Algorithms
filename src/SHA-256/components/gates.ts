export function xor(a: string, b: string) {
  return a === b ? "0" : "1";
}
export function and(a: string, b: string) {
  return a == "1" && b == "1" ? "1" : "0";
}
export function or(a: string, b: string) {
  return a == "1" || b == "1" ? "1" : "0";
}
export function not(a: string) {
  return a == "1" ? "0" : "1";
}
