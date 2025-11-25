const fs = require('fs');

fs.readdir('./data', (err, files) => {
  if (err) throw err;

  files.forEach(file => {
    if (file.endsWith('.txt')) {
      console.log(file);
    }
  });
});
