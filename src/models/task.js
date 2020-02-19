const mongoose = require('mongoose')
const Schema = mongoose.Schema
const timestamps = require('mongoose-timestamp')

const {composeWithMongoose} = require('graphql-compose-mongoose')

const TaskSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    task:{
        type:String,
        trim:true,
        required:true
    },
    description:{
        type:String,
        trim:true,
        required:true
    }
},{
    collection:'tasks'
});

TaskSchema.plugin(timestamps);

TaskSchema.index({ createdAt: 1, updatedAt: 1 });

const Task = mongoose.model('Task', TaskSchema);
const TaskTC = composeWithMongoose(Task);

module.exports={
    Task,
    TaskTC,
    TaskSchema
}