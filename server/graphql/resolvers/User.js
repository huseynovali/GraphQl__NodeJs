const User = require('../../models/UswerSchema');


module.exports ={
    Query:{
        getUsers:async()=>{
            try {
                 let users = await User.find();
                 return users
            } catch (error) {
                console.log(error);
            }
        },
        getUserById:async(_,{userId})=>{
            try {
                 let user = await User.findById(userId);
                 return user
            } catch (error) {
                console.log(error);
            }
        }
    }
} 