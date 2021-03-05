const Engineer = require("../lib/Engineer");

test("can set GitHub account via constructor", () => {
    const testValue = "Git";
    const g = new Engineer("Foo", 1, "test@fakemail.con", testValue);
    expect(g.GitHub).toBe(testValue);

});

test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Foo", 1, "test@fakemail.con", "Gitaccount");
    expect(e.getRole()).toBe(testValue);
    
});

test("Can get GutHub username via getGitHub()", () => {
    const testValue = "Git"
    const g = new Engineer("Foo", 1, "test@fakemail.con", testValue);
    expect(e.getGitHub()).toBe(testValue);
    
});