const Engineer = require('../lib/Engineer');
const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// check that super constructor properties are extant
test('check properties inherited from Employee', () => {
	const engineer = new Engineer('John Smith', 1, 'john@email.com', 'gitboiz');

	expect(engineer).toHaveProperty('name', expect.any(String));
	expect(engineer).toHaveProperty('id', expect.any(Number));
	expect(engineer).toHaveProperty('email', expect.stringMatching(emailRegEx));
});

// check github property added in own constructor
test('check own property github name', () => {
  const engineer = new Engineer('John Smith', 1, 'john@email.com', 'gitboiz' );

  expect(engineer).toHaveProperty('github', expect.any(String));
}); 

// check that engineer.getGithub() returns github user name output string
test("outputs string with a engineer's github name", () => {
	const engineer = new Engineer('John Smith', 1, 'john@email.com', 'gitboiz');

	expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github));
});

// check that engineer.getRole() returns role output string
test("engineer's role overridden to Engineer", () => {
	const engineer = new Engineer('John Smith', 1, 'john@email.com', 'gitboiz');

	expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});
