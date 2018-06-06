const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//================================
// Footballers Schema
//================================
const footballersSchema = new Schema({
    Name: { type: String,required: true},
    Nationality: { type: String,required: true},
    National_Position: { type: String,required: true},
    National_Kit: { type: String,default: null},
    Club: { type: String,default: null},
    Club_Position: { type: String,default: null},
    Club_Kit : { type: String,default: null},
    Club_Joining : { type: Date,default: null},
    Contract_Expiry : { type: String,default: null},
    Rating : { type: Number,default: null},
    Height : { type: String,default: null},
    Weight : { type: String,default: null},
    Preffered_Foot : { type: String,default: null},
    Birth_Date: { type: Date,default: null},
    Age: { type: Number,default: null},
    Preffered_Position: { type: String,default: null},
    Work_Rate: { type: String,default: null},
    Weak_foot: { type: String,default: null},
    Skill_Moves: { type: String,default: null},
    Ball_Control: { type: String,default: null},
    Dribbling: { type: String,default: null},
    Marking: { type: String,default: null},
    Sliding_Tackle: { type: String,default: null},
    Standing_Tackle: { type: String,default: null},
    Aggression: { type: String,default: null},
    Reactions: { type: String,default: null},
    Attacking_Position: { type: String,default: null},
    Interceptions: { type: String,default: null},
    Vision: { type: String,default: null},
    Composure: { type: String,default: null},
    Crossing: { type: String,default: null},
    Short_Pass: { type: String,default: null},
    Long_Pass: { type: String,default: null},
    Acceleration: { type: String,default: null},
    Speed: { type: String,default: null},
    Stamina: { type: String,default: null},
    Strength: { type: String,default: null},
    Balance: { type: String,default: null},
    Agility: { type: String,default: null},
    Jumping: { type: String,default: null},
    Heading: { type: String,default: null},
    Shot_Power: { type: String,default: null},
    Finishing: { type: String,default: null},
    Long_Shots: { type: String,default: null},
    Curve: { type: String,default: null},
    Freekick_Accuracy: { type: String,default: null},
    Penalties: { type: String,default: null},
    Volleys: { type: String,default: null},
    GK_Positioning: { type: String,default: null},
    GK_Diving: { type: String,default: null},
    GK_Kicking: { type: String,default: null},
    GK_Handling: { type: String,default: null},
    GK_Reflexes: { type: String,default: null}
});

//footballersSchema.index({Name:"text",Club:"text",Nationality:"text"});
var footballersModel = mongoose.model('footballers',footballersSchema);
module.exports = footballersModel;







