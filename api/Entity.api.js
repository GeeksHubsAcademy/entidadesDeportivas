const mongoose = require('../connection/mongoose');
const Entity = require('../models/Entity');


module.exports.EntityFindAll = function(req,res){
    Entity.find().exec(function (error, entities) {
        if (error) {
            throw error;
        } else {
            return res.status(200).json(entities);
        }
    })
    
};

module.exports.EntityFindByCityAndDiscipline = function(req,res,entity){
    Entity.find()
            .where('sport_id').equals(entity.sport_id)
            .where('city').equals(entity.city)
            .exec(function (error,entities) {
                if (error) {
                    throw error;
                } else {
                    console.log(entities);
                    
                    return res.status(200).json(entities);
                }
            })
}
//min, max, avg en price_per_lead y monthly_budget
module.exports.EntityFindByUserRequest = function(req,res,userRequest){
    const objective =  userRequest.objective
    const objectiveFilter = "$"+objective;
    console.log(userRequest);
    console.log(objectiveFilter);
    
    
    const group = (userRequest)=>{
        switch (userRequest.request) {
            case "max":
                return group={
                    _id:'',
                    max:{$max: objectiveFilter}
                }
                break;
            case "min":
                return group={
                   _id:'',
                    min:{$min: objectiveFilter}
                }
                break;
            case "avg":
                return group={
                    _id:'',
                    avg:{$avg: objectiveFilter}
                }
                break;
        }
    };
    
    Entity.aggregate([
        {
            $group:group
        }
    ], function (error,result){
        if (error){
            throw error;
        }else{
            return res.status(200).json(result[0].request)
        }
    })
}