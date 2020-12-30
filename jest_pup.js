
describe("Running EA Test with Jest", () => {
    test("Login Test", async () => {
        await page.goto('http://executeautomation.com/demosite/Login.html', {"waitUntil": 'networkidle2'});
        await page.type('[name=UserName]', 'executeautomation');
        await page.type('[name=Password]', 'admin');
        await page.keyboard.press('Enter', {delay: 3000});
    
        //Wait for
        await page.waitFor(() => document.querySelector("[id=Initial]"));
           
    
        await page.type('input[id=Initial]', 'KK');
        
    });
});