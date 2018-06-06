const mongoose = require('mongoose'),
  UserModel = require('../model/user'),
  footballerModel = require('../model/footballer'),
  validator = require("../../validators/reqValidator"),
  validate = require("validate.js"),
  config = require("../../config/env");

// Fetch Footballers Details
function getfootballerDetails(req, res) {
    // valdating request parameters
    validator.footballerDetails(req.query).then((data) => {
        return footballerModel.findById({_id:req.query.footballerId});
    }).then((playerDet) => {
        return res.status(200).send({success:true,data:playerDet});
    }).catch((err) => {
        return res.status(400).send({success:false,message: err });
    })
}
// Fetch Footballers List
function getfootballersList(req, res){
    // valdating request parameters
    validator.footballerList(req.query).then((data) => {
        var skip = parseInt(req.query.skip);
        var limit = parseInt(req.query.limit);
        var orderType = parseInt(req.query.orderType);
        if(orderBy==='Name'){
            return footballerModel.find({}).sort({Name:orderType}).skip(skip).limit(limit);
        }else if(orderBy==='Age'){
            return footballerModel.find({}).sort({Age:orderType}).skip(skip).limit(limit);
        }else{
            return footballerModel.find({}).sort({Rating:orderType}).skip(skip).limit(limit); 
        }
    }).then((playerList) => {
        return res.status(200).send({success:true,data:playerList});
    }).catch((err) => {
        return res.status(400).send({success:false,message: err });
    })
}

// Search Footballer By Category
function getfootballersByCategory(req, res){
    // valdating request parameters
    validator.footballerCategory(req.query).then((data) => {
        var skip = parseInt(req.query.skip);
        var limit = parseInt(req.query.limit);
        var orderType = parseInt(req.query.orderType);
        var category = req.query.category;
        var text = '^'+req.query.text;
        if(category==='Name'){
            return footballerModel.find({Name:{$regex:new RegExp(text,'i')}}).sort({Name:orderType}).skip(skip).limit(limit);
        }else if(category==='Club'){
            return footballerModel.find({Club:{$regex:new RegExp(text,'i')}}).sort({Name:orderType}).skip(skip).limit(limit);
        }else if(category==='Nationality'){
            return footballerModel.find({Nationality:{$regex:new RegExp(text,'i')}}).sort({Name:orderType}).skip(skip).limit(limit); 
        }else{
           return footballerModel.find({}).sort({Rating:orderType}).skip(skip).limit(limit); 
        }
    }).then((playerList) => {
        return res.status(200).send({success:true,data:playerList});
    }).catch((err) => {
        return res.status(400).send({success:false,message: err });
    })
}

// Advance Search fot footballers
function footBallerAdvanceSearch(req, res){
    validator.footBallerAdvanceFilter(req.query).then((data) => {
        var skip = parseInt(req.query.skip);
        var limit = parseInt(req.query.limit);
        var orderType = parseInt(req.query.orderType);
        var filter = {};
        filter.National_Position = req.query.National_Position || null,
        filter.National_Kit = req.query.National_Kit || null,
        filter.Club_Position = req.query.Club_Position || null,
        filter.Club_Kit = req.query.Club_Kit || null,
        filter.Height = req.query.Height || null,
        filter.Weight = req.query.Weight || null,
        filter.Preffered_Foot = req.query.Preffered_Foot || null,
        filter.Weak_foot = req.query.Weak_foot || null,
        filter.Skill_Moves = req.query.Skill_Moves || null,
        filter.Ball_Control = req.query.Ball_Control || null,
        filter.Dribbling = req.query.Dribbling || null,
        filter.Marking = req.query.Marking || null,
        filter.Sliding_Tackle = req.query.Sliding_Tackle || null,
        filter.Standing_Tackle = req.query.Standing_Tackle || null,
        filter.Aggression = req.query.Aggression || null,
        filter.Reactions = req.query.Reactions || null,
        filter.Attacking_Position = req.query.Attacking_Position || null,
        filter.Interceptions = req.query.Interceptions || null,
        filter.Vision = req.query.Vision || null,
        filter.Composure = req.query.Composure || null,
        filter.Crossing = req.query.Crossing || null,
        filter.Short_Pass = req.query.Short_Pass || null,
        filter.Long_Pass = req.query.Long_Pass || null,
        filter.Acceleration = req.query.Acceleration || null,
        filter.Speed = req.query.Speed || null,
        filter.Stamina = req.query.Stamina || null,
        filter.Strength = req.query.Strength || null,
        filter.Balance = req.query.Balance || null,
        filter.Agility = req.query.Agility || null,
        filter.Jumping = req.query.Jumping || null,
        filter.Heading = req.query.Heading || null,
        filter.Shot_Power = req.query.Shot_Power || null,
        filter.Finishing = req.query.Finishing || null,
        filter.Long_Shots = req.query.Long_Shots || null,
        filter.Curve = req.query.Curve || null,
        filter.Freekick_Accuracy = req.query.Freekick_Accuracy || null,
        filter.Penalties = req.query.Penalties || null,
        filter.Volleys = req.query.Volleys || null
        Object.keys(filter).forEach((key) => (filter[key] == null) && delete filter[key]);
        return footballerModel.find(filter).sort({Name:orderType}).skip(skip).limit(limit);
    }).then((playerList) => {
        return res.status(200).send({success:true,data:playerList});
    }).catch((err) => {
        return res.status(400).send({success:false,message: err });
    })
}

// Fetch Players Group By
function getFootballersGroupBy(req,res){
    // Validate parameters
    validator.footBallerAdvanceFilter(req.query).then((data) => {
        if(req.query.groupBy==='Club'){
            return footballerModel.aggregate.aggregate([{$group:{_id:"$Club",footballers:{$push:"$$ROOT"}}}]);
        }else if(req.query.groupBy==='Nationality'){
            return footballerModel.aggregate.aggregate([{$group:{_id:"$Nationality",footballers:{$push:"$$ROOT"}}}]);
        }else if(req.query.groupBy==='National_Position'){
            return footballerModel.aggregate.aggregate([{$group:{_id:"$National_Position",footballers:{$push:"$$ROOT"}}}]);
        }else{
            return footballerModel.find({});
        }
    }).then((playerList) => {
        return res.status(200).send({success:true,data:playerList});
    }).catch((err) => {
        return res.status(400).send({success:false,message: err });
    })
}
module.exports = {
    getfootballerDetails,
    getfootballersList,
    getfootballersByCategory,
    footBallerAdvanceSearch,
    getFootballersGroupBy
}