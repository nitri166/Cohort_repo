// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const { error } = require("console");
let fs = require("fs");

fs.readFile("file.txt", 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    } else {
        console.log(data);
        data = data.replace(/\s+/g, " ");
        console.log(data);
    }


    // handling the write in the callback of the readFile above. 

    fs.writeFile("file.txt", data, (error) => {
        if (!error) {
            console.log("success");

        } else {
            console.log(error);
        }
    })


})
