const Employee = require("../lib/Employee");

describe('Employee', () => {
    it("Should instantiate Employee instance", () => {
        const e = new Employee();
        expect(typeof (e)).toBe("object");
    });
});

describe('Employee', () => {
    it("Should set a name via constructor", () => {
        const name = "Aaron";
        const e = new Employee(name);
        expect(e.name).toBe(name);
    });
});

describe('Employee', () => {
    it("Should set id via constructor", () => {
        const testValue = 100;
        const e = new Employee("Foo", testValue);
        expect(e.id).toBe(testValue);
    });
});

describe('Employee', () => {
    it("Can set email via constructor", () => {
        const testValue = "test@fakemail.con";
        const e = new Employee("Foo", 1, testValue);
        expect(e.email).toBe(testValue);
    });
});

describe('Employee', () => {
    it("Can get name via getName()", () => {
        const testValue = "Aaron";
        const e = new Employee(testValue);
        expect(e.getName()).toBe(testValue);
    });
});
