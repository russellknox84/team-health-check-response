// const db = require("./config")

// db.connect('localhost/teamHealthCheck', (err, cb) => {
//     const QuestionSchema = new db.Schema({
//     question: String, 
//     id: String,
//     type: String,
//     values: Array,
//     validation: Array
// })

// const model = db.model('questions', QuestionSchema)

// const questions = [  
//          {  
//             "question":"I feel like I am working on my own",
//             "id":"Q1",
//             "type":"radio",
//             "values": [
//                 {"id": 1, "value": 1},
//                 {"id": 2, "value": 2},
//                 {"id": 3, "value": 3},
//                 {"id": 4, "value": 4},
//                 {"id": 5, "value": 5}
//             ],
//             "validation": []     
//         },
//          {  
//             "question":"I feel like work is being pushed on me",
//             "id":"Q2",
//             "type":"radio",
//             "values": [
//                 {"id": 1, "value": 1},
//                 {"id": 2, "value": 2},
//                 {"id": 3, "value": 3},
//                 {"id": 4, "value": 4},
//                 {"id": 5, "value": 5}
//             ],
//             "validation": []
//          },
//          {  
//             "question":"I understand the work that I am doing",
//             "id":"Q3",
//             "type":"radio",
//             "values": [
//                 {"id": 1, "value": 1},
//                 {"id": 2, "value": 2},
//                 {"id": 3, "value": 3},
//                 {"id": 4, "value": 4},
//                 {"id": 5, "value": 5}
//             ],
//             "validation": []
//          },
//          {  
//             "question":"I know what work is next",
//             "id":"Q4",
//             "type":"radio",
//             "values": [
//                 {"id": 1, "value": 1},
//                 {"id": 2, "value": 2},
//                 {"id": 3, "value": 3},
//                 {"id": 4, "value": 4},
//                 {"id": 5, "value": 5}
//             ],
//             "validation": []
//          },
//          {  
//             "question":"I understand how my work fits into the bigger picture",
//             "id":"Q5",
//             "type":"radio",
//             "values": [
//                 {"id": 1, "value": 1},
//                 {"id": 2, "value": 2},
//                 {"id": 3, "value": 3},
//                 {"id": 4, "value": 4},
//                 {"id": 5, "value": 5}
//             ],
//             "validation": []
//          },
//          {  
//             "question":"I am happy with my working environment",
//             "id":"Q6",
//             "type":"radio",
//             "values": [
//                 {"id": 1, "value": 1},
//                 {"id": 2, "value": 2},
//                 {"id": 3, "value": 3},
//                 {"id": 4, "value": 4},
//                 {"id": 5, "value": 5}
//             ],
//             "validation": []
//          },
//          {  
//             "question":"I feel I can raise anything with the whole team",
//             "id":"Q7",
//             "type":"radio",
//             "values": [
//                 {"id": 1, "value": 1},
//                 {"id": 2, "value": 2},
//                 {"id": 3, "value": 3},
//                 {"id": 4, "value": 4},
//                 {"id": 5, "value": 5}
//             ],
//             "validation": []
//          },
//          {  
//             "question":"I feel my voice is heard",
//             "id":"Q8",
//             "type":"radio",
//             "values": [
//                 {"id": 1, "value": 1},
//                 {"id": 2, "value": 2},
//                 {"id": 3, "value": 3},
//                 {"id": 4, "value": 4},
//                 {"id": 5, "value": 5}
//             ],
//             "validation": []
//          },
//          {  
//             "question":"I feel supported by my team",
//             "id":"Q9",
//             "type":"radio",
//             "values": [
//                 {"id": 1, "value": 1},
//                 {"id": 2, "value": 2},
//                 {"id": 3, "value": 3},
//                 {"id": 4, "value": 4},
//                 {"id": 5, "value": 5}
//             ],
//             "validation": []
//          },
//          {  
//             "question":"Describe how you are feeling in 3 words",
//             "id":"Q10",
//             "type":"textarea",
//             "validation": []
//          }
//       ]

// questions.forEach(a => {
//     const data = new model({
//        question: a.question, 
//         id: a.id,
//      type: a.type,
//      values: a.values,
//      validation: a.validation
//     })
//     data.save()
// })
// })

