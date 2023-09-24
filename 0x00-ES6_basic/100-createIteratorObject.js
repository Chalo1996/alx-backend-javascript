export default function createIteratorObject(report) {
  return {
    [Symbol.iterator]() {
      const empList = Object.values(report.allEmployees);
      const allEmps = [];
      let idx = 0;

      for (const emp of empList) {
        for (const employee of emp) {
          allEmps.push(employee);
        }
      }

      return {
        next() {
          if (idx < allEmps.length) {
            const result = {
              value: allEmps[idx],
              done: false,
            };
            idx += 1;
            return result;
          }
          return {
            done: true,
          };
        },
      };
    },
  };
}
