import React from 'react'
import services_data from '../../assets/services_data.js'
import arrow_icon from '../../assets/arrow_icon.svg'
import './Services.css'
const Services = () => {
  return (
    <div id='services' className='services'>
      <div className="services-title">
        <h1>Services</h1>
      </div>
      <div className="service-format">
        {services_data.map((service, index) => {
          return <div className='service-box' key={index}>
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>

            <div
              className="services-readmore"
              onClick={() => window.open(service.s_link, "_blank")}
            >
              <p>Read more</p>
              <img src={arrow_icon} alt="arrow icon" />
            </div>

          </div>
        })}

      </div>
    </div>
  )
}

export default Services

