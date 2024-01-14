import React from 'react'
import "./singleContent.css"
import { img_300, unavailable } from '../../config/config'
import { Badge } from '@mui/material'
const singleContent = ({
  title,
  media_type,
  vote_average,
  date,
  poster,
  id, 
  overview
}) => {
  return (
    <div className='media'>
      <Badge badgeContent={vote_average} 
      color={vote_average > 6 ? "primary" :"secondary"} />  
      {/* {title} */}
<img className='poster' src={poster?`${img_300}/${poster}` : unavailable} alt={title} />
   <b className='title'>{title}</b>
   <span className='sunTitle'>{media_type === "tv" ?"TV series":"Movie"}</span>
   <span className='sunTitle'>{date}
   <div className='description'>{overview}</div></span>
  
    </div>
  )
}

export default singleContent
