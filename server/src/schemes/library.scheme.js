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
            // la idea es qeu cada vez que se añada uno se guarde en BD?
        },
        editorial: {
            type: String
        },

        format: {
            type: String,
            required: true,
            // digital, audio, video, papel

        },
        difficulty: {
            type: String,
            //facil, medio, dificil, pro


        }
        // poner un cod autoincremental?



    },
    {
        timestamps: true,
        collection: 'library'
    }
);

module.exports = LibraryScheme;

