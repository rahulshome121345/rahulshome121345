import { Expect,test,Locator, expect } from "@playwright/test"
test("Xpath Locators", async({page})=>{
    page.goto("https://demowebshop.tricentis.com/login");
    const relative_logo=  page.locator("//img[@alt='Tricentis Demo Web Shop']");
    await expect(relative_logo).toBeVisible();

}
)