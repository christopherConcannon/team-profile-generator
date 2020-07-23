const Manager = require('../lib/Manager');

// check that manager object is properly extended from Employee
test('check properties and methods inherited from Employee', () => {
  const manager = new Manager('John Smith', 1, 'john@email.com');

  expect(manager).toHaveProperty('name');
  expect(manager).toHaveProperty('id');
  expect(manager).toHaveProperty('email');
})

test('check manager has office number', () => {
  const manager = new Manager('John Smith', 1, 'john@email.com', 123);

  expect(manager.officeNumber).toBe(123);
})

test("check manager's role overridden to Manager", () => {
  const manager = new Manager('John Smith', 1, 'john@email.com', 123);

  expect(manager.getRole()).toBe('Manager');
})
