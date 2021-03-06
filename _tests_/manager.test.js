const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor", () => {
    const testValue = 1234567;
    const e = new Manager("Foo", 1, "test@fakemail.con", testValue);
    expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("Foo", 1, "test@fakemail.con", 100);
    expect(e.getRole()).toBe(testValue);
    
});
