const Intern = require('../lib/Intern');

// check that intern object is properly extended from Employee
test('check properties and methods inherited from Employee', () => {
	const intern = new Intern('John Smith', 1, 'john@email.com');

	expect(intern).toHaveProperty('name');
	expect(intern).toHaveProperty('id');
	expect(intern).toHaveProperty('email');
});

// check that class has proper school property and value
test('check intern has school name', () => {
	const intern = new Intern('John Smith', 1, 'john@email.com', 'U of A');

	expect(intern.school).toBe('U of A');
});

// check that intern.getSchool() returns school name
test('gets a users school name', () => {
	const intern = new Intern('John Smith', 1, 'john@email.com', 'U of A');

	expect(intern.getSchool()).toBe('U of A');
});

test("intern's role overridden to Intern", () => {
	const intern = new Intern('John Smith', 1, 'john@email.com', 123);

	expect(intern.getRole()).toBe('Intern');
});