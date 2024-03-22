// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  const employeesArray = [];
  // Added: conditional statement to prompt entry of first name, if null, prompts stop
  while (true) {
    const firstName = prompt("Enter employee's first name:");

    if (firstName === null) {
      break;
    }
    // Added: prompts for other parts of employee info
    const lastName = prompt("Enter employee's last name:");
    const salary = prompt("Enter employee's salary:");
  
    // Added: employee array
  const employee = {
    firstName: firstName,
    lastName: lastName,
    salary: salary
  };
  // Added: employees to the array
  employeesArray.push(employee);
  // Added: confirm button, if not confim, end function
  const continueAdding = confirm("Do you want to add another emplyee?");
  if (!continueAdding) {
    break;
  }
}
return employeesArray;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  // Added: starting salary is 0
  let totalSalary = 0;
  // Added: adding each employees salary to the total salary
  for (const employee of employeesArray){
    totalSalary += employee.salary;
  }
  // Added: getting the average salary
  const averageSalary = totalSalary / employeesArray.length;
  // Added: logged average salary to the console
  console.log(`Average Salary: $${averageSalary}`)
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  // Added: function to select random employee 
    const randomIndex = Math.floor(Math.random() * employeesArray.length);
    const randomEmployee = employeesArray[randomIndex];
  // Added: logged the random emplyees name and salary to the console
    console.log(`Random Employee: ${randomEmployee.firstName} ${randomEmployee.lastName} - Salary: $${randomEmployee.salary}`)
  }

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);