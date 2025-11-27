const fs = require('fs');

// Create
fs.writeFile('test.html', '<h1  style="color:red;">HELLO THIS IS HTML FILE</h1><br><h1 style="color:orange;">New Line</h1>', (err) => {
    if (err) {
        console.error('Error creating the file:', err);
    } else {
        console.log('File created successfully!');
    }
});


//read

fs.readFile('test.html', 'utf8', (err, data) =>{
    if(err){
        console.error('erre readind the file:',err);
    }
    else{
        console.log('file content:', data);
    }
});

//update

fs.appendFile('test.html', '<h1 style="color:green;">THIS IS APPENDING FILE </h1>', (err) =>{
    if(err){
        console.error('Erroe appending to this file:',err);
    }
    else{
        console.log('Appended text to the file successfully!');
    }
});

//delete 

fs.unlink('test.html', (err)=>{
    if(err){
        console.error('error deleting the file:',err);
    }
    else{
        console.log('file delete sucessully!');
    }
});
