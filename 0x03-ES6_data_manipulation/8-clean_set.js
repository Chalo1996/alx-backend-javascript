export default function cleanSet(set, startString) {
  let newStr = '';

  for (const word of set) {
    if (startString.length > 0) {
      if (word.startsWith(startString)) {
        newStr += `${word.slice(startString.length)}-`;
      }
    }
  }

  return newStr.slice(0, -1);
}
