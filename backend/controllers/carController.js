const asyncHandler = require('express-async-handler') 

const Car = require('../models/carModel')


const NewCar = asyncHandler ( async(req,res)=>{
   
    const {marque,modele,matricule,prix} = req.body;

    if(!marque || !modele || !matricule || !prix ){
        res.status(422).json("plz fill the data");
    }

    try {
        
        const car = await Car.findOne({matricule:matricule});


        if(car){
            res.status(422).json("this is user is already present");
        }else{
            const addcar = new Car({
                marque,modele,matricule,prix
            });

            await addcar.save();
            res.status(201).json(addcar);
      
        }

    } catch (error) {
        res.status(422).json(error);
    }
})




const AllCars=asyncHandler(async(req,res) =>{
    try {
         const cardata = await Car.find();
         res.status(201).json(cardata)
         //console.log(cardata);
      } catch (error) {
        res.status(422).json(error);
    }
 })




 const OneCar = asyncHandler ( async (req,res)=>{
    try {
        //console.log(req.params);
        const {id} = req.params;

        const carindividual = await Car.findById({_id:id});
       // console.log(carindividual);
        res.status(201).json(carindividual)

     }catch (error){
        res.status(422).json(error)

     }
 })




const UpdateCar=asyncHandler ( async(req,res)=>{
 try{
     const {id} = req.params;
     const updatedcar = await Car.findByIdAndUpdate(id,req.body,{
         new:true
     });

     //console.log(updatedcar);
     res.status(201).json(updatedcar);

     } catch (error) {
     res.status(422).json(error);

     }
 })




 const DeleteCar = asyncHandler (async (req,res)=>{
    try {
        const {id} = req.params;

        const deletcar = await Car.findByIdAndDelete({_id:id})
        //console.log(deletcar);
        res.status(201).json(deletcar);

    }catch (error) {
        res.status(422).json(error);
    }
})


const FetchCar = asyncHandler (async (req,res)=>{
  
    try {
       const cardata = await Car.find({matricule : "177 TU 44" , prix :{"$gte" : 15000}});
       res.status(201).json(cardata);
     
     } catch (error) {
       res.status(422).json(error);
   }
})


module.exports = {
    NewCar,AllCars,OneCar,DeleteCar,UpdateCar,FetchCar
}