import React from 'react'
import './myWork.css'
import mywork_data from '../../assets/mywork_data'
import { ArrowRight } from "lucide-react";

const MyWork = () => {
  return (
    <div id='mywork' className="mywork">
        <div className="mywork-title">
            <h1>My latest work</h1>
        </div>
        <div className="mywork-container">
            {mywork_data.map((work)=>(
                <a 
                key={work.id}
                href={work.link}
                target="_blank"
                rel="nooper noreferrer"
                >
                    <img src={work.image} alt={work.name} />
                </a>
            ))}
        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
            <div className="arrow"><ArrowRight /> </div>
        </div>
    </div>
  )
}

export default MyWork