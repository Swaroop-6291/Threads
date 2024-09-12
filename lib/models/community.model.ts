import mongoose from "mongoose";
import { string } from "zod";

const communitySchema=new mongoose.Schema({
    id:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
        unique:true,
    },
    image:String,
    bio:String,
    threads:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Thread'
        }
    ],
    onboarded:{
        type:Boolean,
        default:false,
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    communities:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Community'
        }
    ],
    members:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }
    ]
})

const Community=mongoose.models.Community || mongoose.model('Community',communitySchema)

export default Community