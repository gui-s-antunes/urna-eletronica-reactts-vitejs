export default function isNumeric(num: string): boolean {
  return /^-?\d+$/.test(num);
}
