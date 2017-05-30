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
        _id: mongo.ObjectId(req.params.id)
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


//save a todo
router.post('/todo',function(req,res,next){
   var todo = req.body;
    if(!todo.text || !(todo.isCompleted+"")){
        res.status(400);
        res.json({
            'error':"Invalid data"
        });
        return res; 
    }else{
        db.todos.save(todo,function (err, result) {
            if(err){
                res.send(err);
            }else{
                res.json(result);
            }

        });
    }
});


// udpate a TODOs

router.put('/todo/:id',function (req,res,next) {
    var todo = req.body;
    var updatedObj = {};

    updatedObj.isCompleted = todo.isCompleted ;
    updatedObj.text = todo.text?todo.text: "";

        db.todos.update({
            _id : mongo.ObjectId(req.params.id)
        },updatedObj , {}, function (err, result ) {

            if(err){
                res.send(err);

            }else{
                res.json(result);
            }
        });
});



// delete a TODOs
router.delete('/todo/:id',function (req,res, next ) {
    db.todos.remove({
        _id: mongo.ObjectId(req.params.id)
    },'',function (err,result) {
            if(err){
                res.send(err);
            }else{
                res.json(result);
            }

    });

});
module.exports = router;
