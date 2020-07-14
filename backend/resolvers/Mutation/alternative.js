const db = require('../../config/db')
const { question: getQuestion } = require('../Query/question')
const { alternative: getAlternative } = require('../Query/alternative')

module.exports = {
    
    async updateAlternativeText(_, { input }) {
        try {
            const question = await getQuestion(_, { id: input.question_id })
            let alternative = await getAlternative(_, { id: input.id })
            if (question) {
                if (alternative) {
                    await db('alternatives')
                        .where({ question_id: input.question_id })
                        .andWhere({ id: input.id })
                        .update({ text: input.text })
                        alternative = await getAlternative(_, { id: input.id })
                }
            }
            return alternative
        }
        catch (e) {
            throw new Error(e.sqlMessage)
        }
    }

}