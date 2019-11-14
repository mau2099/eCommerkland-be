// DEBUG=app:* node scripts/mongo/seedProducts.js

const chalk = require('chalk');
const debug = require('debug')('app:scripts:products');
const MongoLib = require('../../lib/mongo');
const { productsMock } = require('../../utils/mocks');

async function seedProducts() {
  try {
    const mongoDB = new MongoLib();

    const promises = productsMock.map(async product => {
      await mongoDB.create('products', product);
    });

    await Promise.all(promises);
    debug(chalk.green(`${promises.length} products have been created succesfully`)); // prettier-ignore
    return process.exit(0);
  } catch (error) {
    debug(chalk.red(error));
    process.exit(1);
  }
}

seedProducts();
