const Manager = require('../lib/Manager');

test('create the manager object', () => {
    const manager = new Manager('John Smith', 'jsmith@test.com', '1', '800-555-5555');

    expect(manager.name).toBe('John Smith');
    expect(manager.email).toBe('jsmith@test.com');
    expect(manager.id).toBe('1');
    expect(manager.officeNumber).toBe('800-555-5555');

});

test("Get manager's officenumber", () => {
    const manager = new Manager('John Smith', 'jsmith@test.com', '1', '800-555-5555');

    expect(manager.getOfficeNumber()).toBe('800-555-5555');
});

test("Get manager's role", () => {
    const manager = new Manager('John Smith', 'jsmith@test.com', '1', '800-555-5555');

    expect(manager.getRole()).toBe('Manager');
});