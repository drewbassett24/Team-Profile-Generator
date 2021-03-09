const Engineer = require("../lib/Engineer");
describe('Engineer', () => {
    it("can set GitHub account via constructor", () => {
        const testValue = "Git";
        const g = new Engineer("Foo", 1, "test@fakemail.con", testValue);
        expect(g.GitHub).toBe(testValue);

    });
});

describe('Engineer', () => {
    it("getRole() should return \"Engineer\"", () => {
        const testValue = "Engineer";
        const e = new Engineer("Foo", 1, "test@fakemail.con", "Gitaccount");
        expect(e.getRole()).toBe(testValue);

    });
});

describe('Engineer', () => {
    it("Can get GutHub username via getGitHub()", () => {
        const testValue = "Git"
        const e = new Engineer("Foo", 1, "test@fakemail.con", testValue);
        expect(e.getGitHub()).toBe(testValue);

    });
});