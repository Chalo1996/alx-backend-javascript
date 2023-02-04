interface std {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentOne: std = {
  firstName: 'Emmanuel',
  lastName: 'Chalo',
  age: 25,
  location: 'Nairobi',
}

const studentTwo: std = {
  firstName: 'David',
  lastName: 'Mutune',
  age: 25,
  location: 'London',
}

const studentList: std[] = [studentOne, studentTwo]

const table = document.querySelector("#myTable")
let tableHTML = "<thead><tr><th>First Name</th><th>Location</th></tr></thead><tbody>";


studentList.forEach((student) => {
  tableHTML += "<tr>";
  tableHTML += `<td>${student.firstName}</td>`;
  tableHTML += `<td>${student.location}</td>`;
  tableHTML += `</tr>`;
})

tableHTML += "</tbody>";
table.innerHTML = tableHTML;
