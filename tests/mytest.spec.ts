import{test,expect} from"@playwright/test";

//syntax to write the testcase in playwright

// test("title",()=>{

// step 1
// step 2 
// step 3


// })



test("verify page title",async ({page})=>{

await page.goto("http://www.automationpractice.pl/index.php");
let title:string =await page.title();
console.log("Title:", title)

await expect(page).toHaveTitle("My Shop");

})