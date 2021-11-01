const { Schema, model } = require('mongoose');

const skillSchema = new Schema(
    {
        skill: { type: String }
    }
)