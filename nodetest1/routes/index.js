var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'My Store' });
});


/* GET My method to display items: Electronics */
router.get('/itemlist', function(req, res) {

    var db = req.db;
    var collection = db.get('Item');
    collection.find({},{},function(e,docs){
        res.render('itemlist', {
            "itemlist" : docs
        });
    });
});

/* GET My method to display items: Fashion */
router.get('/itemlist2', function(req, res) {

    var db = req.db;
    var collection = db.get('Item');
    collection.find({},{},function(e,docs){
        res.render('itemlist2', {
            "itemlist2" : docs
        });
    });
});

/* GET My method to display items: Books */
router.get('/itemlist3', function(req, res) {

    var db = req.db;
    var collection = db.get('Item');
    collection.find({},{},function(e,docs){
        res.render('itemlist3', {
            "itemlist3" : docs
        });
    });
});


/* GET New User page. */
router.get('/search', function(req, res) {
    res.render('search', { title: 'Search Products' });
});


/* POST My method to search items */
router.post('/searchProd', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var pName = req.body.productName;
    console.log(pName);

    // Set our collection
    var collection = db.get('Item');

    // Submit to the DB
    collection.find({ $or: [{name: {$regex: pName}},{brand: {$regex: pName}},{price: {$regex: pName}},{type: {$regex: pName}},
{size: {$regex: pName}},{description: {$regex: pName}},{pixel: {$regex: pName}}, {capacity: {$regex: pName}},
{quantity: {$regex: pName}}, {color: {$regex: pName}},{bookName: {$regex: pName}},{ISBN: {$regex: pName}},{author: {$regex: pName}} ] },{},function(e,docs){
        console.log(docs);
        res.render('display', {
            "search_var" : docs
        });

    });
});


module.exports = router;

