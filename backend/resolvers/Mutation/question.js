const db = require('../../config/db')
const { question: getQuestion } = require('../Query/question')
const { alternative: getAlternative } = require('../Query/alternative')

module.exports = {

    async newQuestion(_, { input }) {
        try {
            const createAsk = await db('questions').insert({
                ask: input.ask,
                correct: input.correct
            })
            const id = createAsk[0]
            for (let alternative of input.alternatives) {
                await db('alternatives').insert({
                    num: alternative.num,
                    text: alternative.text,
                    question_id: id
                })
            }
            const question = await getQuestion(_, { id })
            return question
        }
        catch (e) {
            throw new Error(e.sqlMessage)
        }
    },

    async deleteQuestion(_, { input }) {
        try {
            const question = await getQuestion(_, { id: input.id })
            if (question) {
                const { id } = question
                await db('alternatives')
                    .where({ question_id: id }).delete()
                await db('questions')
                    .where({ id }).delete()
            }
            return question
        }
        catch (e) {
            throw new Error(e.sqlMessage)
        }
    },

    // async updateAlternativeText(_, { input }) {
    //     try {
    //         const question = await getQuestion(_, { id: input.question_id })
    //         let alternative = await getAlternative(_, { id: input.id })
    //         if (question) {
    //             if (alternative) {
    //                 await db('alternatives')
    //                     .where({ question_id: input.question_id })
    //                     .andWhere({ id: input.id })
    //                     .update({ text: input.text })
    //                     alternative = await getAlternative(_, { id: input.id })
    //             }
    //         }
    //         return alternative
    //     }
    //     catch (e) {
    //         throw new Error(e.sqlMessage)
    //     }
    // },

    async updateQuestionCorrect(_, { input }) {
        try{
            let question = await getQuestion(_, { id: input.id })
            if(question){
                await db('questions')
                    .where({ id: input.id })
                    .update({ correct: input.correct })
                question = await getQuestion(_, { id: input.id })
            }
            return question
        }
        catch (e) {
            throw new Error(e.sqlMessage)
        }
    },

    async updateQuestionAsk(_, { input }) {
        try{
            let question = await getQuestion(_, { id: input.id })
            if(question){
                await db('questions')
                    .where({ id: input.id })
                    .update({ ask: input.ask })
                question = await getQuestion(_, { id: input.id })
            }
            return question
        }
        catch (e) {
            throw new Error(e.sqlMessage)
        }
    }

}