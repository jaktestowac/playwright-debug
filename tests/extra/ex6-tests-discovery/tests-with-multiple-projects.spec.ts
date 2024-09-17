/*
Playing with projects form Playwright config file
*/
import test from "@playwright/test";

test("Parent test @parent", async () => {
    console.log('Parent project') 
});

test("Child 1 test @child1", async () => {
    console.log('Child project') 
});

test("Child 2 test @child2", async () => {
    console.log('Child project') 
});

// Exercises
// Get familiar with Projects (in playwright.config.ts) and corresponding tests 
// Navigate to view Testing 
// 1 In PLAYWRIGHT uncheck all projects and refresh TEST EXPLORER
// 2 In PLAYWRIGHT check Chromium project and refresh TEST EXPLORER, verify tests (unfold)
// 3 In PLAYWRIGHT check Parent and Child1 and 2 projects and refresh TEST EXPLORER, 
//   verify tests (unfold), run tests, verify logs
// 4 In PLAYWRIGHT check only Child1 projects and refresh TEST EXPLORER,
//   verify child1 test (unfold), run test, verify logs (do not displayed tests were executed?)

