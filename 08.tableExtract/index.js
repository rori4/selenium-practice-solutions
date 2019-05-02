const { Builder, By } = require("selenium-webdriver");

const driver = new Builder().forBrowser("firefox").build();

async function extractTable() {
  let results = [];
  try {
    await driver.get(
      "https://rori4.github.io/selenium-practice/#/pages/tables/smart-table"
    );
    for (let i = 1; i < 6; i++) {
      let rows = await driver.findElements(By.xpath("//tbody//tr"));
      for (const row of rows) {
        let rowData = await row.getText();
        let user = rowData.split(/\n/);
        results.push({
          id: user[0],
          firstName: user[1],
          lastName: user[2],
          username: user[3],
          email: user[4],
          age: user[5]
        });
      }
      await driver.findElement(By.css(".page-link-next")).click();
    }
    console.table(results);
  } catch (error) {
    console.log(error);
  }
}

extractTable();
