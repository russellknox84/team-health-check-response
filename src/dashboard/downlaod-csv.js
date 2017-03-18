import React, { Component } from "react"

import "../../sass/index.scss"

class DownloadCSV extends Component {

    state = {}
    constructor(){
        super()
    }

    convertToCSV() {
        const dataToConvert = this.props.input


const string = this.props.input
function convertArrayOfObjectsToCSV(args) {  
   const result = string.map(a => {        
     return a.userResponse.map(b => {
        const keys = Object.keys(b) 
        return keys.map(v => {        		
           return `${a.date},${v},${b[v]}`
        }).join("\n")         
    }).join("\n")
  })
  const a = ["Date, Questions, Value", ...result]
  
  return a.join("\n")
 }
 
 function downloadCSV(args) {  
     
     var csv = convertArrayOfObjectsToCSV({
         data: string
     });
     if (csv == null) return;

     const filename = args.filename || 'export.csv';

     if (!csv.match(/^data:text\/csv/i)) {
         csv = 'data:text/csv;charset=utf-8,' + csv;
     }
     const data = encodeURI(csv);

     let link = document.createElement('a');
     link.setAttribute('href', data);
     link.setAttribute('download', filename);
     link.click();
 }
 
 downloadCSV({ filename: `team_health_check_17042017.csv` })


        console.log(dataToConvert)
    }

    render() {
         return (
                    <button onClick={this.convertToCSV.bind(this)} className="csvDownload">download</button>
     
         )
    }
}

export default DownloadCSV