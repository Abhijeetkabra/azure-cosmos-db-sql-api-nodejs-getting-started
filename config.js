// @ts-check

const config = {
  endpoint: "https://itsoc-test-engineering.documents.azure.com:443/",
  key: "aMoMOUJI2udUJHhqPXpUpa5lyn1Lsv700eC7uuONto6KwYubQYLlWFcRAlhUcXTiAfTSUNmgmLNmACDbxFNmzQ==",
  databaseId: "Tasks",
  containerId: "Items",
  partitionKey: { kind: "Hash", paths: ["/category"] }
};

module.exports = config;
