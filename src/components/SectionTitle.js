import React from 'react'
import './SectionTitle.css'

const SectionTitle = ({content}) => {
  return (
    <div className="section-head-box">
    <h3>
     {content}
    </h3>
    </div>
  )
}

export default SectionTitle