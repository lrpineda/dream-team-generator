const Intern = require('../lib/Intern');

test('create the intern object', () => {
    const intern = new Intern('John Smith', 'jsmith@test.com', '1', 'school');

    expect(intern.name).toBe('John Smith');
    expect(intern.email).toBe('jsmith@test.com');
    expect(intern.id).toBe('1');
    expect(intern.school).toBe('school');
});

test("get intern's school", () => {
    const intern = new Intern('John Smith', 'jsmith@test.com', '1', 'school');

    expect(intern.getSchool()).toBe('school');

});

test("get intern's role", () => {
    const intern = new Intern('John Smith', 'jsmith@test.com', '1', 'school');

    expect(intern.getRole()).toBe('Intern');
});
