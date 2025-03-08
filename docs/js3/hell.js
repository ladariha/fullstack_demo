const fs = require("fs");
const { readFile, writeFile, unlink, access, constants } = fs;

const getItems = (onItemsLoaded) => {
  readFile("./data.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }


    const items = JSON.parse(data).items;
    onItemsLoaded(items);

  });
};

const writeItems = (items, onItemsWritten) => {
  writeFile("./data2.json", JSON.stringify({ items2: items }), (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    onItemsWritten();

  });

};

const deleteCopiedFile = (onFileDeleted) => {

  access("./data2.json", constants.F_OK, (err) => {
    if (err) {
      // does not exist
      onFileDeleted();
      return;
    }
    unlink("./data2.json", (err) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      onFileDeleted();
    });
  });


};

deleteCopiedFile(
  () => {
    getItems((polozky) => {
        writeItems(polozky, () => {
          console.log("All done");
        });
      },
    );
  },
);
