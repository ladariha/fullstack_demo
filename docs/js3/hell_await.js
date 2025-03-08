const fs = require("fs/promises");
const { readFile, writeFile, unlink, access, constants } = fs;

const getItems = async () => {
  return readFile("./data.json", "utf8")
    .then((data) => {
      const items = JSON.parse(data).items;
      return items;
    });
};

const writeItems = async (items) => {
  return writeFile("./data2.json", JSON.stringify({ items2: items }));
};

const deleteCopyFile = async () => {
  return access("./data2.json", constants.F_OK)
    .then(() => {
      return unlink("./data2.json");
    }, () => {
      return undefined;
    });
};

const demo = () => {
  return Promise.resolve(1);
}

const run = async () => {
  try {
    console.log("HODNOTA "+ hodnota);
    await deleteCopyFile();
    const items = await getItems();
    await writeItems(items);
    console.log("DONE");
  } catch (e) {
    console.error(e.message);
    // console.log(err);
  }
};

run();
