const validate = require("validate.js");

var constraints = {
    "userRegistration":{
        "name":{
            "presence":true
        },
        "age":{
            "presence":true
        },
        "address":{
            "presence":true
        },
        "email": {
            "presence": true
        }
    },
    "login":{
        "email": {
            "presence": true,
            "length": {
                "maximum": 75
            },
            "email": {
                "message": "Not a valid email"
            }
        },
        "password": {
            "presence":true
        }
    },
    "forgotPasswordValidator":{
        "email": {
            "presence": true,
            "length": {
                "maximum": 75
            },
        }
    },
    "verifyOtpValidator":{
        "email": {
            "presence": true,
            "length": {
                "maximum": 75
            },
        },
        "otp": {
            "presence": true,
            "length": {
                "maximum": 8
            },
        },
        "newPassword": {
            "presence": true
        },
        "confirmPassword": {
            "presence": true,
            "equality":"newPassword"
        },
    },
    "getfootballersDet":{
        "footballerId":{
            "presence":true,
        },
    },
    "getfootballersList":{
        "skip":{
            "presence":true
        },
        "limit":{
            "presence":true
        },
        "orderBy":{
            "presence":true,
            "inclusion": {
              "within": ['Name','Age','Rank'],
              "message": "Invalid Category!!"
            }
        },
        "orderType":{
            "presence":true,
            "inclusion": {
                "within": [-1,1,'-1','1'],
                "message": "Invalid Category!!"
            }
        }
    },
    "footballerCategory":{
        "skip":{
            "presence":true
        },
        "limit":{
            "presence":true
        },
        "orderBy":{
            "presence":true,
            "inclusion": {
              "within": ['Name','Age','Rank'],
              "message": "Invalid Category!!"
            }
        },
        "orderType":{
            "presence":true,
            "inclusion": {
                "within": [-1,1,'-1','1'],
                "message": "Invalid Category!!"
            }
        },
        "category":{
            "presence":true,
            "inclusion": {
                "within": ['Name','Club','Nationality'],
                "message": "Invalid Category!!"
            }
        },
        "text":{
            "presence":true
        }
    },
    "AdvanceFilter":{
        "National_Position":{
            "inclusion": {
                "within": ["LS","RW","GK","RS","RCB","LF","CAM","Sub","LCB","RCM","LW","LDM","LAM","LCM","CB","CDM","LM","RM","LB","ST","CM","RF","RB","RDM","RAM"],
                "message": "Invalid Position!!"
            }
        },
        "Club_Position":{
            "inclusion": {
                "within": ["LS","RW","GK","RS","RCB","LF","CAM","Sub","LCB","RCM","LW","LDM","LAM","LCM","CB","CDM","LM","RM","LB","ST","CM","RF","RB","RDM","RAM"],
                "message": "Invalid Position!!"
            }
        },
        "Preffered_Foot":{
            "inclusion": {
                "within": ["Left","Right"],
                "message": "Invalid Preffered_Foot!!"
            }
        },
        "skip":{
            "presence":true
        },
        "limit":{
            "presence":true
        },
        "orderType":{
            "presence":true,
            "inclusion": {
                "within": [-1,1,'-1','1'],
                "message": "Invalid Category!!"
            }
        },
    }
};

module.exports.userRegValidate = function (body) {
    return validate.async(body, constraints.userRegistration);
};

module.exports.loginValidator = function (body) {
    return validate.async(body, constraints.login);
};

module.exports.forgotPasswordValidator = function (body) {
    return validate.async(body, constraints.forgotPasswordValidator);
};

module.exports.verifyOtpValidator = function (body) {
    return validate.async(body, constraints.verifyOtpValidator);
};

module.exports.footballerDetails = function (body) {
    return validate.async(body, constraints.getfootballersDet);
};

module.exports.footballerList = function (body) {
    return validate.async(body, constraints.getfootballersList);
};

module.exports.footballerCategory = function (body) {
    return validate.async(body, constraints.footballerCategory);
};

module.exports.footBallerAdvanceFilter = function (body) {
    return validate.async(body, constraints.AdvanceFilter);
};

