export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(employeesList) {
      const depsCount = Object.keys(employeesList).length;
      return depsCount;
    },
  };
}
