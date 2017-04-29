// routes/note_routes.js

var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {

  app.get('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { key: {$regex : `.*${id}.*`}};
    db.collection('notes').find(details).toArray(function(err, results){
      var ret = [];
    for(var i =0;i<results.length;i++) {
      if(results[i]["status"] == 1) {
        ret.push(results[i]);
      }
    }
    console.log(ret); // output all records
    res.send(ret);
   });
  });

  app.post('/notes', (req, res) => {
    const note = { key:req.body.key, val:req.body.val,
                   likes: req.body.likes, cont: req.body.cont,
                   cat: req.body.cat, status: 0};
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
    const details = { key: query };
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
    const details = { key: id };
    const note = { key:req.body.key, val:req.body.val,
                   likes: req.body.likes, cont: req.body.cont,
                   cat: req.body.cat, status: req.body.stat};
    db.collection('notes').update(details, note, (err, result) => {
      if (err) {
          res.send({'error':'An error has occurred'});
      } else {
          res.send(note);
      }
    });
  });

};
