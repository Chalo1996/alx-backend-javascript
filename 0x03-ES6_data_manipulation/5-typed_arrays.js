export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    console.log('Position outside range');
  }

  const arrayBuff = new ArrayBuffer(length);
  const valAtPos = new Int8Array(arrayBuff);
  valAtPos[position] = value;

  return arrayBuff;
}
