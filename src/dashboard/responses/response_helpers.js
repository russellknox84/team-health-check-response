const groupByQuestion = (questions)  =>
   questions.reduce((state, value) => {          
        const test = value.userResponse.map(a => {
            if (state[a.question]) {       
                return Object.assign(state, 
                    {[a.question]: [...state[a.question], {
                        question: a.question, 
                        userResponse: a.userResponse,
                        date: value.date,
                        //accValue: userResponse + state.accValue 
                    }]})                      
            }            
            return Object.assign(state, 
                {[a.question]: [{
                        question: a.question, 
                        userResponse: a.userResponse,
                        date: value.date
                    }]})  

        })
        return Object.assign(state)            
        }, {})


const groupByResponse = (data) =>
    data.reduce((state, acc) => {
        if (state[acc.date]) {  
            return Object.assign(state, {[acc.date]: [...state[acc.date],acc.userResponse]})    
        }
            return Object.assign(state, {[acc.date]: [acc.userResponse]})
    }, {})

export { groupByQuestion, groupByResponse }