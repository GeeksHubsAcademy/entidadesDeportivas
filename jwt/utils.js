const moment = require('moment');
const secretKey = require('../config/config').TOKEN_SECRET;
const jwt = require('jsonwebtoken');


exports.createToken = function(user, timeExp){
    
    const payload={
        sub: user._id,
        iss: user.iss,
        iat: moment().unix(),
        exp: timeExp
    }

    return jwt.sign(payload, secretKey);
}