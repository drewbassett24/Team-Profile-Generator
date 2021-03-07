const Employee = require("../lib/Employee");

describe('Employee', () => {
    it("Can instantiate Employee instance", () => {
        const e = new Employee();
        expect(typeof(e)).toBe("object");
    });
});

it("Can set a name via constructor", () => {
    const name = "Aaron";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

it("Can set id via constructor", () => {
    const testValue = 100;
    const e = new Employee("Foo", testValue);
    expect(e.id).toBe(testValue);
});

it("Can set email via constructor", () => {
    const testValue = "test@fakemail.con";
    const e = new Employee("Foo", 1, testValue);
    expect(e.email).toBe(testValue);
});

it("Can get name via getName()", () => {
    const testValue = "Aaron";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

