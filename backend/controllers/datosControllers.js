const Cities = require("../models/cities.js")
const Itinerary = require("../models/itinerary.js")


const citiesController = {
    ObtenerCiudades:async(req,res) => {
        let cities
      
        let error = null
        try {
            cities = await Cities.find()
        
            
        } catch (err) {
            error = err
            console.log(error)
            
        }

        res.json({
            response:error?"ERROR":{cities},
            success:error?false:true,
            error:error
        })

    },

    ObtenerItynerarios:async(req,res) => {
      
      

        let itinerary;
        let error = null
        try {           
            itinerary = await Itinerary.find()
            
            
        } catch (err) {
            error = err
            console.log(error) 
            
        }

        res.json({            
            response:error?"ERROR":{itinerary},
            success:error?false:true,
            error:error
        })

    } // req=require res=response
    
    
    
}

module.exports = citiesController