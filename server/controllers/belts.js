const mongoose = require('mongoose');

const Belt = mongoose.model('Belt');


module.exports = {
    index: function(req, res){
        Belt.find({})
        .then(
            data => res.json({message: true, data: data})
        )
        .catch(
            error => res.json({message: false, error: error})
        )
    },

    create: function(req, res){
        Belt.create(req.body)
        .then(
            data => res.json({message: true, data: data})
        )
        .catch(
            error => res.json({message: false, error: error})
        )
        
    },

    findOne: function(req, res){
        console.log("id in the controller, ", req.params.id)
        Belt.findOne({_id: req.params.id})
        .then(
            data => 
            {console.log("data in the controllers", data);
            res.json({message: true, data: data})
            }
        )
        .catch(
            error => res.json({message: false, error: error})
        )
    },

    update: function(req, res){
        console.log("did we make it to this point", req.params.id, "reqbody after this", req.body)
        Belt.update({_id: req.params.id}, {$set: req.body}, {runValidators: true, context: "query"})
        .then(
            data => res.json({message: true, data: data})
        )
        .catch(
            error => res.json({message: false, error: error})
        )
    },

    // delete a movie
    removeBelt: function(req, res){
        Belt.remove({_id: req.params.id})
        .then(
            data => res.json({message: true, data: data})
        )
        .catch(
            error => res.json({message: false, error: error})
        )
    }
}