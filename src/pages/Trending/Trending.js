import React, { useState,useEffect } from 'react'
import { json } from 'react-router-dom';
import singleContent from '../../components/singleContent/singleContent';
import pagination from '../../components/Pagination/Pagination';
import { Key } from '@mui/icons-material';
import { ListItem } from '@mui/material';
import "./Trending.css"
const Trending = () => {

  let [Page, setPage] = useState(1)
  const [options, setOptions] = useState([]);
  const fetchdata = async()=>{
  
  const fetch = require('node-fetch');

const url = `https://api.themoviedb.org/3/trending/all/day?page=${Page}&language=en-US`;
const data = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTJiMDM0NTI1Y2NhOTM2ZDJjZDEwY2QzZDQ4NGQ2OCIsInN1YiI6IjY1OGIzMjk4ZGQyNTg5NzFhZTZjNDUwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CdLi11nyAUvSznM-pQld_33GRYhge6BkEe67odgbMZg'
  },
  
  
};

fetch(url, data)
 .then(res => res.json())
 
  .then(json => setOptions(json.results))
  .catch(err => console.error('error:' + err));

}
  useEffect(() => {
   fetchdata();
  
    
  },[Page]);
  
  return (
    <div>
       <span className='pageTitle'>Trending</span>
       <div className='trending'>
        { options && options.map((c)=>console.log(c)||
        <div key={c.id} >{
        
          singleContent(
            {
              title: c.title||c.name,
              id : c.id,
              poster:c.poster_path,
              date:c.first_air_date||c.release_date,
              media_type:c.media_type,
              vote_average:c.vote_average,   
              overview:c.overview
           
            }
          )
          
        
        }
        </div>)}
        </div><div>
        {pagination(setPage={setPage})}
        </div>
        
       
    </div>
  )
}

export default Trending
