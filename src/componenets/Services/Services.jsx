import React from 'react'
import './services.css'
import Services_Data from '../../assets/services_data'
import { ArrowRight } from "lucide-react";

const Services = () => {
  return (
    <div id='services' className="services">
      <div className="services-title">
        <h1>My Services</h1>
      </div>

      <div className="services-container">
        {Services_Data.map((service, index) => {
          return (
            <div key={index} className="services-format">
              <h3>{service.id}</h3>
              <h2>{service.name}</h2>
              <p>{service.description}</p>

              <div className="services-readmode">
                <p>Read More</p>
                <div className="arrow">
                  <ArrowRight />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Services