//all locators----->
// page.getByRole() to locate by explicit and implicit accessibility attributes.
// page.getByText() to locate by text content.
// page.getByLabel() to locate a form control by associated label's text.
// page.getByPlaceholder() to locate an input by placeholder.
// page.getByAltText() to locate an element, usually image, by its text alternative.
// page.getByTitle() to locate an element by its title attribute.
// page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).



import{test,expect,Locator} from "@playwright/test";
test("Verify Playwright Locators", async({page})=>{
await page.goto("https://demo.nopcommerce.com/");
const logo:Locator = page.getByAltText("nopCommerce demo store");
// await logo.click();
// await expect(logo).toBeVisible();

const text:Locator=page.getByText("Welcome to our store");
await expect(text).toBeVisible();

await page.getByRole("link",{name:'Register'}).click();
await expect (page.getByRole("heading",{name: 'Register'})).toBeVisible();


await page.getByLabel('First name:').fill('Rahul');
await page.getByLabel('Last name:').fill('Shome');
await page.getByLabel('Email:').fill('rahulshome828@gmail.com');

await page.getByPlaceholder('Search store').fill('Mobile');






})
