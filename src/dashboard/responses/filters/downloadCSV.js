import React, { Component } from "react"

import "../../../../sass/index.scss"

class DownloadCSV extends Component {

    state = {}
    constructor(){
        super()
    }

    convertToCSV() {
        const dataToConvert = this.props.input
        const string = this.props.input
        const convertArrayOfObjectsToCSV = (args) => {    
            const result = string.map(a =>        
                    a.userResponse.map(b =>
                        `${a.date},${b.question},${b.userResponse}`        
                ).join("\n")
            )
            
            return ["Date, Questions, Value", ...result].join("\n")
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
                className="csvDownload">
                    <h3>download</h3>
            </button>  
         )
    }
}

export default DownloadCSV