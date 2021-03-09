const Intern = require("../lib/Intern");

describe('Intern', () => {
    it("Should set school via constructor", () => {
        const school = "MySchool";
        const s = new Intern("Foo", 1, "test@test.com", testValue);
        expect(s.school).toBe(testValue);

    });
});

describe('Intern', () => {
    it("getRole() should return \"Intern\"", () => {
        const testValue = "Intern";
        const i = new Intern("Foo", 1, "test@fakemail.con", 123);
        expect(i.getRole()).toBe(testValue);

    });
});

describe('Intern', () => {
    it("Should get school via getSchool()", () => {
        const testValue = "MySchool"
        const s = new Intern("Foo", 1, "test@fakemail.con", testValue);
        expect(s.getSchool()).toBe(testValue);

    });
});