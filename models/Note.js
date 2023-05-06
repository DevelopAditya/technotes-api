const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-plugin-autoinc');
const mongooseConnection = mongoose.connection

const noteSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        title: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        completed: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
)

noteSchema.plugin(AutoIncrement.plugin, {
    model: 'Note',
    inc_field: 'ticket',
    id: 'ticketNums',
    start_seq: 500
})

module.exports = mongooseConnection.model('Note', noteSchema)