import React from 'react'
import './Work.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Work_Data from '../../assets/mywork_data'
import arrow from '../../assets/arrow_icon.svg'

const Work = () => {
  return (
    <div className='work' id='work'>
      <div className="work-title">
        <h1>My latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="work-container">
        {Work_Data.map((work,index) => {
          return <img key={index} src={work.w_img} alt="" />
        }
        )}
      </div>
      <div className="work-showmore">
        <p>Show More</p>
        <img src={arrow} alt="" />
      </div>
    </div>
  )
}

export default Work
