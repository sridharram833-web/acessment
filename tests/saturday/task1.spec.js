import { test,chromium, expect} from '@playwright/test';
// test("taskone",async({page})=>{

// //import test = require("node:test");

//     await page.goto("https://www.saucedemo.com/");

//     await page.locator('//input[@placeholder="Username"]');
//     await page.keyboard.press("Tab");

//     await page.keyboard.press("Tab");

//     await page.locator('[class="submit-button btn_action"]').click();


//     await page.locator('//h3[.="Epic sadface: Username is required"]').textContent();
//     await expect(await page.locator('//h3[.="Epic sadface: Username is required"]')).toBeVisible();
// let varlenght=await page.locator('//h3[.="Epic sadface: Username is required"]').textContent();

// if(varlenght.length>5){
//     console.log("verfy")
// }
// else{
//     console.log("not verified");
// }

// await page.locator('//input[@placeholder="Username"]').fill("standard_user");

// await page.locator('[placeholder="Password"]').fill("secret_sauce")

// await page.locator('[class="submit-button btn_action"]').click();

// await page.locator('(//button[@class="btn btn_primary btn_small btn_inventory "])[4]').click();



// })






// test("tasktwo",async({page})=>{

//     await page.goto("https://blinkit.com/");
//      await page.waitForTimeout(2000);

//      await page.locator('[class="btn location-box mask-button"]').click()

//     await page.locator('//div[@class="SearchBar__AnimationWrapper-sc-16lps2d-1 iJnYYS"]').click();
//      await page.waitForTimeout(2000);

//     await page.locator('[placeholder="Search for atta dal and more"]').fill("Banana Chocochip Pancake Mix");

//     await page.keyboard.press("Control+A")
//     await page.keyboard.press("Control+X")
//      await page.waitForTimeout(2000);

//     await expect(await page.locator('[placeholder="Search for atta dal and more"]').inputValue()).toBe("");

// await page.keyboard.press("Control+V")
//  await page.waitForTimeout(2000);
//  await expect(await page.locator('[placeholder="Search for atta dal and more"]').inputValue()).toBe("pancake");

//  await page.screenshot({path:"ss.png"});

//   await page.locator('[placeholder="Search for atta dal and more"]').fill("pancake").click();

//      await page.waitForTimeout(2000);
//      await page.locator('(//div[text()="ADD"])[1]').click();

//      await page.locator('(//div[text()="ADD"])[2]').click();

//     //  await page.locator('[placeholder="Search for atta dal and more"]').clear();

//     //  await page.locator('[placeholder="Search for atta dal and more"]').fill("icecream");

//     //  await page.keyboard.press("Enter");
//     //   await page.waitForTimeout(2000);

    
//      await page.locator('//div[@class="CartButton__Button-sc-1fuy2nj-5 gRSsdk"]').click();
//       await page.waitForTimeout(2000);
//      await expect(await page.locator('//div[@class="DefaultProductCard__Container-sc-18qk0hu-3 ljflZF"]')).toHaveCount(2)

// })



// // test("taskthree",async({page})=>{

// //     await page.goto("https://blinkit.com/");
// //      await page.waitForTimeout(2000);

// //      await page.locator('[class="btn location-box mask-button"]').click()

// //     await page.locator('//div[@class="SearchBar__AnimationWrapper-sc-16lps2d-1 iJnYYS"]').click();

// //     await page.locator('[placeholder="Search for atta dal and more"]').fill("chocolate");

// //      await page.waitForTimeout(2000);


// //     await expect(await page.locator('[class="SearchBarContainer__Input-sc-hl8pft-3 irVxjq"]').inputValue()).toBe("chocolate");

// //    await  page.locator('[class="SearchBarContainer__Input-sc-hl8pft-3 irVxjq"]').clear();
// //     await page.waitForTimeout(2000);

    
// // await page.locator('[class="SearchBarContainer__Input-sc-hl8pft-3 irVxjq"]').fill("juice");
// //  await page.waitForTimeout(2000);

// // await expect(await page.locator('[class="SearchBarContainer__Input-sc-hl8pft-3 irVxjq"]').inputValue()).toBe("juice");




// // })




// test("amazonexecution",async({page})=>{

//     await page.setViewportSize({width:1366,height:768});
//     await page.waitForTimeout(2000);

//     await page.goto("https://www.amazon.in/");

//     await page.locator('[id="twotabsearchtextbox"]').fill('laptops');
//     await page.locator('[id="nav-search-submit-button"]').click();
//     await page.goBack();
//     //  await page.locator('[class="s-suggestion s-suggestion-ellipsis-direction"]')
//      await page.waitForTimeout(2000);
//     await expect(await page.locator('[id="twotabsearchtextbox"]').textContent()).toBe("laptops")

// })


 

// test("fifth",async({page})=>{
//     await page.goto("https://blinkit.com/");

//       await page.locator('[class="SearchBar__AnimationWrapper-sc-16lps2d-1 iJnYYS"]').click();
//          await page.waitForTimeout(2000);

//      await  page.locator('[placeholder="Search for atta dal and more"]').fill('pancake');
//       await page.waitForTimeout(3000);
//       await page.keyboard.press("Control+A");
//       await page.keyboard.press("Control+x");
// let b=await  page.locator('[placeholder="Search for atta dal and more"]').inputValue();
// expect(b).toBe("");
// await page.keyboard.press("Control+V");
// let r=await  page.locator('[placeholder="Search for atta dal and more"]').inputValue();
// expect(r).toBe("pancake");
// await page.screenshot({path:"screenshot/blink.jpg"});
// await  page.keyboard.press("Enter")
// await page.locator(`(//div[@class="tw-rounded-md tw-font-okra tw-flex tw-items-center tw-justify-center tw-flex-col tw-font-semibold tw-overflow-hidden tw-text-300 tw-px-0 tw-gap-0.5 tw-min-w-[66px] tw-min-h-[32px] tw-bg-green-050 tw-border tw-border-base-green tw-text-base-green"])[4]`).click();
// await page.locator(`(//div[@class="tw-rounded-md tw-font-okra tw-flex tw-items-center tw-justify-center tw-flex-col tw-font-semibold tw-overflow-hidden tw-text-300 tw-px-0 tw-gap-0.5 tw-min-w-[66px] tw-min-h-[32px] tw-bg-green-050 tw-border tw-border-base-green tw-text-base-green"])[5]`).click();

// let x=await page.locator(`//div[@class="CartButton__Text-sc-1fuy2nj-4 iQAgjV"][1]`).textContent();
// expect(x).toBe( "2 items");
// let y=await page.locator(`//div[@class="CartButton__Text-sc-1fuy2nj-4 iQAgjV"][2]`).textContent();
// console.log(y);


// })

// 2. Demo WebShop

// Set viewport to 1366 x 780
// Launch demowebshop application
// click on Digital downloads
// click on music 2  Having actual price of 10.00
// Verify that shopping cart was increased it's count or not
// Open the shopping cart
// target the quantity input field and change that 1 to 3
// Hit Enter button 
//  and verify that total price was changed to 30 or not price



// test("webtaskexecution",async({page})=>{

//     await page.setViewportSize({width:1366,height:780});
//      await page.waitForTimeout(2000);

//     await page.goto("https://demowebshop.tricentis.com/");

//     await page.locator('(//a[@href="/digital-downloads"])[1]').click();
//      await page.waitForTimeout(2000);

//      await page.locator('(//input[@class="button-2 product-box-add-to-cart-button"])[2]').click();

//     await page.locator('(//a[@href="/music-album-1"])[2]').click()
//      await page.waitForTimeout(2000);

//      await page.locator('[id="add-to-cart-button-51"]').click()

//     await page.locator('(//a[@href="/cart"])[1]').click()

//     await page.locator('//input[@class="qty-input"]').fill("3")
//      await page.waitForTimeout(2000);

//     await page.keyboard.press("Enter");
//      await page.waitForTimeout(2000);

//     await expect(await page.locator('//span[@class="product-subtotal"]').textContent()).toBe("30.00");

//  await page.waitForTimeout(2000);

//     // await page.keyboard('//input[@name="itemquantity6844710"]')


// })
// test("test6",async({page})=>{

// })