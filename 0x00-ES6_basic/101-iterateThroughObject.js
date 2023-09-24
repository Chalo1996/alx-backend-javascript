export default function iterateThroughObject(reportWithIterator) {
  let nameSting = '';

  for (const item of reportWithIterator) {
    nameSting += `${item} | `;
  }

  return nameSting.substring(0, nameSting.length - 3);
}
