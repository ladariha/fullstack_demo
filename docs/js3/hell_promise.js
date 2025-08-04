const fs = require("fs/promises");
const { readFile, writeFile, unlink, access, constants } = fs;

const getItems = () => {
  return readFile("./data.json", "utf8")
    .then((data) => {
      const items = JSON.parse(data).items;
      return items;
    });
};

const writeItems = (items) => {
  return writeFile("./data2.json", JSON.stringify({ items2: items }));
};

const deleteCopyFile = () => {
  return access("./data2.json", constants.F_OK)
    .then(() => {
      return unlink("./data2.json");
    }, () => {
      return undefined;
    });
};

deleteCopyFile()
  .then(getItems)
  .then(writeItems)
  .then(() => {
    console.log("All done");
  })
  .catch((err) => {
    console.error("oops");
    // console.log(err);
  });
