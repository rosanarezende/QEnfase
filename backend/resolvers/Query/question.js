const db = require('../../config/db')

module.exports = {
    async questions() {
        const result = await db.raw(`
                SELECT 
                    q.id as question_id,
                    q.ask,
                    q.correct,
                    a.id as alternative_id,
                    a.num,
                    a.text
                FROM questions q
                JOIN alternatives a ON q.id = a.question_id
            `)
        let resultFormatted = []
        for (let question of result[0]) {
            const { question_id, ask, correct, num, text, alternative_id } = question
            const questionInArray = resultFormatted.find(item => item.id === question_id)
            if (!questionInArray) {
                let nextQuestion = {
                    id: question_id,
                    ask,
                    correct,
                    alternatives: [{
                        id: alternative_id,
                        num,
                        text
                    }]
                }
                resultFormatted.push(nextQuestion)
            }
            else {
                questionInArray.alternatives.push({
                    id: alternative_id,
                    num,
                    text
                })
            }
        }
        return resultFormatted
    },
    async question(_, { id }) {
        if (!id) return null
        const result = await db.raw(`
                SELECT 
                    q.id as question_id,
                    q.ask,
                    q.correct,
                    a.id as alternative_id,
                    a.num,
                    a.text
                FROM questions q
                JOIN alternatives a ON q.id = a.question_id
                WHERE q.id = ${id}
            `)
        let resultFormatted = []
        for (let question of result[0]) {
            const { question_id, ask, correct, num, text, alternative_id } = question
            const questionInArray = resultFormatted.find(item => item.id === question_id)
            if (!questionInArray) {
                let nextQuestion = {
                    id: question_id,
                    ask,
                    correct,
                    alternatives: [{
                        id: alternative_id,
                        num,
                        text
                    }]
                }
                resultFormatted.push(nextQuestion)
            }
            else {
                questionInArray.alternatives.push({
                    id: alternative_id,
                    num,
                    text
                })
            }
        }
        return resultFormatted[0]
    }
}