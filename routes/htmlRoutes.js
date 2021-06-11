const path = require('path')

module.exports = (app) => {
    // html get request
 
  
    // Handles visiting notes page
    app.get('/notes', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/notes.html'));
    });
  
    // any other path directs to home page
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/index.html'));
    });
  };