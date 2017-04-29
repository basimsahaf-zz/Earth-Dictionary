// routes/note_routes.js

var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {

  app.get('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { key: "Stratosphere" };
    db.collection('notes').find(details).toArray(function(err, results){
    console.log(results); // output all records
    res.send(results);
   });
  });

  app.post('/notes', (req, res) => {
    const note = { val: req.body.body, key: req.body.title,
                   likes: req.body.likes, cont: req.body.cont,
                   cat: req.body.cat};
    db.collection('notes').insert(note, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send(result.ops[0]);
      }
    });
  });

  app.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('notes').remove(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send('Note ' + id + ' deleted!');
      }
    });
  });

  app.put('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    const note = { val: req.body.body, key: req.body.title,
                   likes: req.body.likes, cont: req.body.cont,
                   cat: req.body.cat};
    db.collection('notes').update(details, note, (err, result) => {
      if (err) {
          res.send({'error':'An error has occurred'});
      } else {
          res.send(note);
      }
    });
  });

};
