const mongoose = require("mongoose") // va a almacenar los datos de las ciudades cities

const itinerarySchema = new mongoose.Schema ({
    name: {type:String,require:true},
    city: {type:String,require:true},
    description:{type:String,require:true},
    price: {type:String,require:true},
    time: {type:String,require:true},    
    image: {type:String,require:true},
    likes:{type:Array}
    
})

const Itinerary = mongoose.model("itinerary",itinerarySchema)

module.exports = Itinerary; 
