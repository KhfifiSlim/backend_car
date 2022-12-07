const mongoose = require("mongoose");

const carModel = new mongoose.Schema({
    marque: {
        type: String
       
    },
    modele: {
        type: String
        
      
    },
    matricule: {
        type: String
    
    },
    prix: {
        type: Number
       
    }

    
});

const cars = new mongoose.model("cars",carModel);


module.exports = cars;