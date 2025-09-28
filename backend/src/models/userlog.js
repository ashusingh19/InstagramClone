import mongoose from "mongoose";
import bcrypt from "bcrypt";
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
            type:String,
            require:true,
            minlength:6
    },
    email:{
         type:String,
        require:true,
        unique:true,
    },
    fullname:{
         type:String,
        require:true,
    }
})
userSchema.pre("Save",async function (next) {
    if(!this.ismodified ('password')) return next();
        try{
    const salt =await bcrypt.gensalt(10);
    this.password = await bcrypt.hash(this.password,salt);
    next();
        }catch(err){
            next(err);
        }
});
//compare password
userSchema.methods.comparePassword = async function (userpassword) {
    return await bcrypt.compare(userpassword,this.password);
}
 const User = mongoose.model(`User`,userSchema);
 export default User;
