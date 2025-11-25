const fs = require('fs');

// Create
fs.writeFile('info.txt', 'HELLO MY NAME IS HARIS MY COURSE NAME IS NODE_JS', (err) => {
    if (err) {
        console.error('Error creating the file:', err);
    } else {
        console.log('File created successfully!');
    }
});


//read
fs.readFile('info.txt', 'utf8', (err, data) =>{
    if(err){
        console.error('erre readind the file:',err);
    }
    else{
        console.log('file content:', data);
    }
});