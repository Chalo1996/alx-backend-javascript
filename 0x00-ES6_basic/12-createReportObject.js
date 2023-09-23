export default function createReportObject ( employeesList ) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments ( employeesList ) {
      depsCount = 0;
      for ( let _deps of Object.keys( employeesList ) ) {
        depsCount += 1;
      }
      return depsCount;
    }
  }
};
