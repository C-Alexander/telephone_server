"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db = require('../config/dbConfig').getDb;
const types = require('sequelize').DataTypes;
module.exports.Number = db.define('number', {
    id: {
        type: types.UUID, primaryKey: true, allowNull: false, defaultValue: db.fn('uuid_generate_v4') //change this to regular increment if not postgres pls
    },
    phoneName: {
        type: types.TEXT, allowNull: false
    },
    lastRung: {
        type: types.DATE, allowNull: false
    },
    lastPlayedAudio: {
        type: types.DATE, allowNull: false
    },
    filePlayed: {
        type: types.TEXT, allowNull: false
    },
});
//# sourceMappingURL=state.js.map