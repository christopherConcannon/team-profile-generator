const Manager = require('../lib/Manager');
const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// check that super constructor properties are extant and of correct type
test('check properties inherited from Employee', () => {
  const manager = new Manager('John Smith', 1, 'john@email.com', 123);

  expect(manager).toHaveProperty('name', expect.any(String));
  expect(manager).toHaveProperty('id', expect.any(Number));
  expect(manager).toHaveProperty('email', expect.stringMatching(emailRegEx));
})

// check officeNumber property added in own constructor
test('check manager has office number', () => {
  const manager = new Manager('John Smith', 1, 'john@email.com', 123);

  expect(manager).toHaveProperty('officeNumber', expect.any(Number));
}); 

// check that manager.getOfficeNumber() returns office number output string
test("outputs string with a manager's office number", () => {
	const manager = new Manager('John Smith', 1, 'john@email.com', 123);

	expect(manager.getOfficeNumber()).toEqual(expect.stringContaining((manager.officeNumber).toString()));
});

// check that manager.getRole() returns role output string
test("manager's role overridden to Manager", () => {
  const manager = new Manager('John Smith', 1, 'john@email.com', 123);

  expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
})
