// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.


const fs = require("fs");

let data = "Definition of fs.writeFile-> fs.writeFile() method is used to asynchronously write the specified data to a file. By default, the file would be replaced if it exists. The ‘options’ parameter can be used to modify the functionality of the method.";

fs.writeFile("a.txt", data, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Data written to file!!!");
    }

});