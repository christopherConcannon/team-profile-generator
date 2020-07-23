const Employee = require('../lib/Employee.js');

// check that employee object instance is created and returns name, id, and email property with appropriate values
test('creates employee object instance', () => {
  const employee = new Employee('John Smith', 1, 'john@email.com');

  expect(employee.name).toBe('John Smith');
  expect(employee.id).toBe(1);
  expect(employee.email).toBe('john@email.com');
});

// check that employee.getName() method returns correct 'name' property value
test("gets an employee's name", () => {
  const employee = new Employee('John Smith', 1, 'john@email.com');
  expect(employee.getName()).toBe('John Smith');
})

// check that employee.getId() method returns correct 'id' property value
test("gets an employee's id", () => {
  const employee = new Employee('John Smith', 1, 'john@email.com');
  expect(employee.getId()).toBe(1);
})

// check that employee.getEmail() method returns correct 'email' property value
test("gets an employee's email", () => {
  const employee = new Employee('John Smith', 1, 'john@email.com');
  expect(employee.getEmail()).toBe('john@email.com');
})


// check that employee.getRole() method returns 'Employee'
test("gets an employee's name", () => {
  const employee = new Employee('John Smith', 1, 'john@email.com');
  expect(employee.getRole()).toBe('Employee');
})




