import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Stats() {
    let file = 10000, total_record = 99999, record = 231;
    return (
        <div className="d-flex flex-row justify-content-center mb-4">
            <div className="mr-4" style={{ width: 150, height: 150 }}>
                <strong className="text-center">FILES</strong>
                <CircularProgressbar  
                value={file} 
                text={file} 
                styles={buildStyles({
                    strokeLinecap: "butt",
                    pathColor: "green"
                  })}/>
            </div>
            <div className="mr-4" style={{ width: 150, height: 150 }}>
                <strong className="text-center">RECORDS</strong>
                <CircularProgressbar  
                    value={file} 
                    text={file} 
                    styles={buildStyles({
                        strokeLinecap: "butt",
                        pathColor: "green"
                })}/>
            </div>
            <div className="mr-4" style={{ width: 150, height: 150 }}>
                <strong className="text-center">USERS</strong>
                <CircularProgressbar  
                    value={file} 
                    text={file} 
                    styles={buildStyles({
                        strokeLinecap: "butt",
                        pathColor: "green"
                })}/>
            </div>
        </div>
    )
}

export default Stats