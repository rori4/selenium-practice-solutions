const { Builder, By, } = require("selenium-webdriver");

const driver = new Builder()
  .forBrowser("firefox")
  .build();

  async function datepickerFrom() {
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/datepicker-form")
        await driver.findElement(By.xpath("//input[@formcontrolname='dateOne']")).sendKeys("Apr 16, 2019");
        await driver.findElement(By.xpath("//input[@formcontrolname='dateTwo']")).sendKeys("Apr 7, 2019 - Apr 16, 2019");
        await driver.findElement(By.id("submit")).click();
    } catch (error) {
        console.log(error);
    }
  }

  datepickerFrom();