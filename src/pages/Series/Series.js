
import React, { useState,useEffect } from 'react'
import singleContent from '../../components/singleContent/singleContent';
import pagination from '../../components/Pagination/Pagination';
import Genres from '../../components/Genres';
import useGenres from '../../hooks/useGenre';
import { Key } from '@mui/icons-material';

const Movies = () => {
  
  let [Page, setPage] = useState(1)
  const [options, setOptions] = useState([]);
  const [selectedGenres, setselectedGenres] = useState([])
  const [genres, setgenres] = useState([])
  const genreforURL = useGenres(selectedGenres);
  const fetchdata = async()=>{
  
  const fetch = require('node-fetch');

const url = `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&page=${Page}&language=en-US&with_genres=${genreforURL}`;
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
  
    
  },[Page, genreforURL]);
  
  return (
    <div>
       <span className='pageTitle'>Movies</span>
       <Genres 
       type='tv'
       selectedGenres={selectedGenres}
       setselectedGenres={setselectedGenres}
       genres={genres}
       setgenres={setgenres}
       setPage={setPage}
       />
       <div className='trending'>
        { options && options.map((c)=>console.log(c)||
        <div key={c.id} >{
        
          singleContent(
            {
              title: c.title||c.name,
              id : c.id,
              poster:c.poster_path,
              date:c.first_air_date||c.release_date,
              media_type:"tv",
              vote_average:c.vote_average,   
              overview:c.overview
           
            }
          )
          
        
        }
        </div>)}
        </div>
        {pagination(setPage={setPage})}
        </div>
        
       
    
  )

}

export default Movies
