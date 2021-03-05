const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("Can set a name via constructor", () => {
    const name = "Aaron";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Can set id via constructor", () => {
    const testValue = 100;
    const e = new Employee("Foo", testValue);
    expect(e.id).toBe(testValue);
});

test("Can set email via constructor", () => {
    const testValue = "test@test.com";
    const e = new Employee("Foo", 1, testValue);
    expect(e,email).toBe(testValue);
});

test("Can get name via getName()", () => {
    const testValue = "Aaron";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

