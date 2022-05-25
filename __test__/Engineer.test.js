const Engineer = require('../lib/Engineer');

test('create the engineer object', () => {
    const engineer = new Engineer('John Smith', 'jsmith@test.com', '1', 'jsmith');

    expect(engineer.name).toBe('John Smith');
    expect(engineer.email).toBe('jsmith@test.com');
    expect(engineer.id).toBe('1');
    expect(engineer.github).toBe('jsmith');
});

test("Get engineer's github", () => {
    const engineer = new Engineer('John Smith', 'jsmith@test.com', '1', 'jsmith');

    expect(engineer.getGithub()).toBe('jsmith');
});

test("Get engineer's role", () => {
    const engineer = new Engineer('John Smith', 'jsmith@test.com', '1', 'jsmith');

    expect(engineer.getRole()).toBe('Engineer');
});