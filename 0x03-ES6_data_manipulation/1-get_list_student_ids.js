export default function getListStudentIds(array) {
  if (!Array.isArray(array)) {
    return [];
  }
  const ids = [];
  for (let i = 0, len = array.length; i < len; i += 1) {
    ids.push(array[i].id);
  }

  return ids;
}
