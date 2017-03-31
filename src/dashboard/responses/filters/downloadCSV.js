import React, { Component } from "react"

import "../../../../sass/index.scss"

class DownloadCSV extends Component {

    state = {}
    
    convertToCSV() {
        const dataToConvert = this.props.input
        const string = this.props.input
        const convertArrayOfObjectsToCSV = (args) => {  
             
             const returnHeading = (question) => 
                question[0].userResponse.map(question => `${question.question}`)
            
             const returnQuestion = (results) =>
                results.userResponse.map(question => `${question.userResponse}`)       
                
            const header = returnHeading(string).join(',')
            const result = string.map(results => {

               return [` 
                    ${results.date}, ${returnQuestion(results)}`].join(",")
            })
           
            return [`, ${header}`, result].join("")
        }
 
        const downloadCSV = () => {  
            
            let csv = convertArrayOfObjectsToCSV()
            const filename = "team_health_check.csv"

            if (!csv.match(/^data:text\/csv/i)) {
                csv = 'data:text/csv;charset=utf-8,' + csv;
            }
            const data = encodeURI(csv);

            let link = document.createElement('a');
            link.setAttribute('href', data);
            link.setAttribute('download', filename);
            link.click();
        }

        return downloadCSV()
    }

    render() {
         return (
            <button 
                onClick={this.convertToCSV.bind(this)} 
                className="button">
                Download CSV file
            </button>  
         )
    }
}

export default DownloadCSV