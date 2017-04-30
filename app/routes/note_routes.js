var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {

  // Function for GET /notes/label requests to retrieve
  // data from existing API endpoints
  app.get('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { label: {$regex : `.*${id}.*`}};
    db.collection('notes').find(details).toArray(function(err, results){
      var ret = [];
    for(var i =0;i<results.length;i++) {
      if(results[i]["status"] == 1) {
        ret.push(results[i]);
      }
    }
    res.header('Access-Control-Allow-Origin', '*');
    res.send(ret);
   });
  });

  // Function for GET /notes requests to retrieve
  // all stored data from existing API endpoints
  app.get('/notes', (req, res) => {

    const details = {status: 1};
    db.collection('notes').find(details).toArray(function(err, results){
      var ret = [];
    for(var i =0;i<results.length;i++) {
      if(results[i]["status"] == 1) {
        ret.push(results[i]);
      }
    }
    res.header('Access-Control-Allow-Origin', '*');
    res.send(ret);
   });
  });

  // Function for POST /notes to create a new API endpoint
  app.post('/notes', (req, res) => {
    const note = { label:req.body.label, value:req.body.value,
                   likes: 0, dislikes:0, cont: req.body.cont,
                   cat: req.body.cat, status: 1};
    db.collection('notes').insert(note, (err, result) => {
      if (err) {
        res.header('Access-Control-Allow-Origin', '*');
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.header('Access-Control-Allow-Origin', '*');
        res.send(result.ops[0]);
      }
    });
  });

  // Function for DELETE /notes/label to delete an existing
  // API endpoint
  app.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { label: query };
    db.collection('notes').remove(details, (err, item) => {
      if (err) {
        res.header('Access-Control-Allow-Origin', '*');
        res.send({'error':'An error has occurred'});
      } else {
        res.header('Access-Control-Allow-Origin', '*');
        res.send('Note ' + id + ' deleted!');
      }
    });
  });

  // Function for PUT /notes/label to update the records
  // of an existing API endpoint
  app.put('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { label: id };
    const note = { label:req.body.label, value:req.body.value,
                   likes: req.body.likes, dislikes: req.body.dislikes,
                   cont: req.body.cont, cat: req.body.cat,
                   status: req.body.stat};
    db.collection('notes').update(details, note, (err, result) => {
      if (err) {
        res.header('Access-Control-Allow-Origin', '*');
          res.send({'error':'An error has occurred'});
      } else {
        res.header('Access-Control-Allow-Origin', '*');
          res.send(note);
      }
    });
  });

};
