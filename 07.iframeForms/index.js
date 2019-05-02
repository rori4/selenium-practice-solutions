const { Builder, By, Key } = require("selenium-webdriver");

const driver = new Builder().forBrowser("firefox").build();

async function iframeFrom() {
  try {
    await driver.get(
      "https://rori4.github.io/selenium-practice/#/pages/practice/iframe-form"
    );
    await driver.switchTo().frame(0);
    await driver
      .findElement(By.xpath("//input[@aria-label='Name']"))
      .sendKeys("Rangel Stoilov");
    await driver.actions().sendKeys(Key.TAB).perform();
    await driver.actions().sendKeys(
        Key.chord(
          Key.ARROW_DOWN,
          Key.ARROW_DOWN,
          Key.ARROW_DOWN,
          Key.ARROW_DOWN
        )
      ).perform();
      await driver.actions().sendKeys(Key.chord(Key.TAB,Key.TAB)).perform();
      await driver.actions().sendKeys(Key.chord(Key.ARROW_DOWN)).perform();
      await driver.actions().sendKeys(Key.chord(Key.ARROW_DOWN)).perform();
      await driver.actions().sendKeys(Key.chord(Key.ARROW_DOWN)).perform();
      await driver.actions().sendKeys(Key.chord(Key.SPACE)).perform();
      await driver.actions().sendKeys(Key.chord(Key.TAB,"08")).perform();
      await driver.actions().sendKeys(Key.chord(Key.TAB,"26")).perform();
      await driver.actions().sendKeys(Key.chord(Key.TAB,"1991")).perform();
      await driver.actions().sendKeys(Key.chord(Key.TAB,Key.SPACE)).perform();
      await driver.actions().sendKeys(Key.chord(Key.TAB,Key.SPACE)).perform();
      await driver.actions().sendKeys(Key.chord(Key.TAB,"Secret answer")).perform();
      await driver.actions().sendKeys(Key.chord(Key.TAB,Key.SPACE)).perform();
  } catch (error) {
    console.log(error);
  }
}

iframeFrom();
