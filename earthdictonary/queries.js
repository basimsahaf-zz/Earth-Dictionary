var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/entries';
var db = pgp(connectionString);

// add query functions

module.exports = {
  getAllEntries: getAllEntries,
  getSingleEntry: getSingleEntry,
  createEntry: createEntry,
  updateEntry: updateEntry,
  removeEntry: removeEntry
};
