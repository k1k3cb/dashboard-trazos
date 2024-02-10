const { mongoose } = require('mongoose');

const LibraryScheme = mongoose.Schema(
    {

        title: {
            type: String,
            required: true,
            trim: true
        },
        author: {
            type: String,
            required: true,
            trim: true
            
        },
        editorial: {
            type: String
        },

        format: {
            type: Array,
            required: true,
            // digital, audio, video, papel

        },
        difficulty: {
            type: String,
            //facil, medio, dificil, pro


        }
        



    },
    {
        timestamps: true,
        collection: 'library'
    }
);

module.exports = LibraryScheme;

