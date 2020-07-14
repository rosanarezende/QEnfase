const db = require('../../config/db')

module.exports = {
    alternatives(){
        return db('alternatives')
    },
    alternative(_, { id }){
        if(!id) return null
        return db('alternatives').where({ id }).first()
    }
}