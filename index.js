var co = require("co");
var colors = require("colors");

/**
 * Hello dm-prompt
 * Whats up?
 */

// =========== [ MODULE DEFINE ] ===========
var job = {};

// =========== [ job.start() ] ===========
/**
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
job.start = co.wrap(function*() {

    var args = process.argv;
    if (args[2] === "help") {
        console.log("dm-project help".blue);
    } else if (args[2] === "start") {
        console.log("dm-project start".yellow);
    }

    return yield Promise.resolve("start");
}); // job.start()

// =========== [ MODULE EXPORT ] ===========
module.exports = job;
