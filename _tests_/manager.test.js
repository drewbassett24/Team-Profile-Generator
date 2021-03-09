const Manager = require("../lib/Manager");
// const Employee = require("../lib/Employee");

describe('Manager', () => {
    it("Should set office number via constructor", () => {
        const testValue = 1234567;
        const e = new Manager("Foo", 1, "test@fakemail.con", testValue);
        expect(e.getOfficeNumber).toBe(testValue);
    });
});

describe('Manager', () => {
    it("getRole() should return \"Manager\"", () => {
        const testValue = "Manager";
        const e = new Manager("Foo", 1, "test@fakemail.con", 100);
        expect(e.getRole()).toBe(testValue);

    });
});
