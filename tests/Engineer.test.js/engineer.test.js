const Engineer = require("../lib/Engineer");

test("can set GitHub account via constructor", () => {
    const testValue = "GitHUbUser";
    const e = new Engineert("Foo", 1, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
});

test("Can get GutHub username via getGitHub()", () => {
    const testValue = "GithUbUser";
    const e = new Engineer("Foo", 1, "test@test.com", testValue);
    expect(e.getGitHub()).toBe(testValue);
});