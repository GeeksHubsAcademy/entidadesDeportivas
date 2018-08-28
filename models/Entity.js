const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true,
        unique:true
    },
    entity_id:{
        type: Number,
        required: true,
        unique:true
    },
    sport_id:{
        type: Number,
        required: true,
    },
    sport_name:{
        type: String,
        required: true,
        unique:true
    },
    lead_score:{
        type: Number,
    },
    monthly_budget:{
        type: Number,
        required: true,
    },
    price_per_lead:{
        type: Number,
        required: true,
    },
    place_id:{
        type: String,
        required: true,
        unique:true
    },
    city:{
        type: String,
        required: true
    }
});

module.exports=mongoose.model('entities', UserSchema);
