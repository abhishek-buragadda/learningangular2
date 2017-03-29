var express = require('express');
var router = express.Router();
var mongo = require("mongojs");
var db = mongo("mongodb://abhi:abhi@ds139370.mlab.com:39370/ab_todos");

//get all the todos
router.get('/todos', function(req, res, next) {
    db.todos.find(function(err, todos) {
        if (err) {
            res.status(400);
            res.json({
                "error": "cannot find any todos"
            })
        } else {
            res.json(todos);
        }
    });

});
//get one todo based on id .

router.get('/todos/:id', function(req, res, next) {
    db.todos.findOne({
        _id: mongo.ObjectId(req.params.id);
    }, function(err, todo) {
        if (err) {
            res.status(400);
            res.json({
                "error": "cannot find any todos"
            })
        } else {
            res.json(todo);
        }

    });
});


module.exports = router;
