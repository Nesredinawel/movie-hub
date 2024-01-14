import { Chip } from '@mui/material';
import React, { useState,useEffect } from 'react'

const Genres = ({
    selectedGenres,
    setselectedGenres,
    genres,
    setgenres,
    type,
    setPage,
}) => {

    const handleAdd = (genre) => {
        setselectedGenres([...selectedGenres, genre]);
        setgenres(genres.filter((g)=> g.id !== genre.id));
        setPage(1);
    }
    const handleRemove = (genre) =>{
        setselectedGenres(selectedGenres.filter((selected)=> selected.id !== genre.id));
         setgenres([...genres, genre]);
         setPage(1);

    }
    const fetchgenres = async()=>{
  
        const fetch = require('node-fetch');
      
      const url = `https://api.themoviedb.org/3/genre/${type}/list?language=en`;
      const data = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTJiMDM0NTI1Y2NhOTM2ZDJjZDEwY2QzZDQ4NGQ2OCIsInN1YiI6IjY1OGIzMjk4ZGQyNTg5NzFhZTZjNDUwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CdLi11nyAUvSznM-pQld_33GRYhge6BkEe67odgbMZg'
        },
        
        
      };
      
      fetch(url, data)
       .then(res => res.json())
       
        .then(json => setgenres(json.genres))
        .catch(err => console.error('error:' + err));
      
      }
        useEffect(() => {
         fetchgenres();
         return ()=>{
            setgenres();
            

            
         }
        
          
        },[]);
        


  return (
    <div style={{padding:"6px 0"}}>
         { selectedGenres && selectedGenres.map((genre)=>console.log(genre) || 
        <Chip
        color='primary'
            style={{margin: 2}}
        label={genre.name}
        key={genre.id}
        clickable
        // onClick={}
        onDelete={()=> handleRemove(genre)}
      />)}
        
        { genres && genres.map((genre)=>console.log(genre) || 
        <Chip
        
            style={{margin: 2,
            color:'white'}}
        label={genre.name}
        key={genre.id}
        clickable
        onClick={() => handleAdd(genre)}
        // onDelete={}
      />)}
    </div>
  )
}

export default Genres
