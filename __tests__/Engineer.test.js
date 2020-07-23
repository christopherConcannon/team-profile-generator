const Engineer = require('../lib/Engineer');

// check that engineer object is properly extended from Employee
test('check properties and methods inherited from Employee', () => {
	const engineer = new Engineer('John Smith', 1, 'john@email.com');

	expect(engineer).toHaveProperty('name');
	expect(engineer).toHaveProperty('id');
	expect(engineer).toHaveProperty('email');
});

// check that class has proper github username property and value
test('check engineer has github name', () => {
	const engineer = new Engineer('John Smith', 1, 'john@email.com', 'gitboi123');

	expect(engineer.github).toBe('gitboi123');
});

// check that engineer.getGithub() returns github user name
test('gets a users github name', () => {
	const engineer = new Engineer('John Smith', 1, 'john@email.com', 'gitboi123');

	expect(engineer.getGithub()).toBe('gitboi123');
});

test("Engineer's role overridden to Engineer", () => {
	const engineer = new Engineer('John Smith', 1, 'john@email.com', 123);

	expect(engineer.getRole()).toBe('Engineer');
});
