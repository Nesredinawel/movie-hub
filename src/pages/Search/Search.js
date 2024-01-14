import { Button, Tab, Tabs, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import singleContent from '../../components/singleContent/singleContent';
import pagination from '../../components/Pagination/Pagination';
import React, { useState,useEffect } from 'react'


const Search = () => {
  let [type,setType] =useState(0);
  let [Page, setPage] = useState(1);
  let [searchText, setsearchText] = useState("");
  let [content, setcontent] = useState()

  const fetchSearch = async()=>{
  
    const fetch = require('node-fetch');
  
  const url = `https://api.themoviedb.org/3/search/${type?"tv":"movie"}?include_adult=false&language=en-US&&query=${searchText}&page=${Page}&language=en-US`;
  const data = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTJiMDM0NTI1Y2NhOTM2ZDJjZDEwY2QzZDQ4NGQ2OCIsInN1YiI6IjY1OGIzMjk4ZGQyNTg5NzFhZTZjNDUwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CdLi11nyAUvSznM-pQld_33GRYhge6BkEe67odgbMZg'
    },
    
    
  };
  
  fetch(url, data)
   .then(res => res.json())
   
    .then(json => setcontent(json.results))
    .catch(err => console.error('error:' + err));
  
  }
  useEffect(() => {
    window.scroll(0,0);
    fetchSearch();
    return ()=>{
      setcontent();
      

      
   }
     
   },[Page, type]);
   
  return (<div>
    <div style={{display:'flex'}}>
      <TextField 
      style={{flex:1}}
      className='searchBox'
      label='search'
      variant='filled'
     onChange={(e)=> setsearchText(e.target.value)}
      />
      <Button variant='contained' style={{marginLeft:10}}>
        <SearchIcon/>
      </Button>
      
    </div>
    <Tabs value={type} indicatorColor='primary' textColor='primary'
    onChange={(event,newValue)=>{
      setType(newValue);
      setPage(1);
    }}
    >
      <Tab style={{width:"50%"}} label="Search Movies" />
      <Tab style={{width:"50%"}} label="Search TV Series" />

    </Tabs>
    <div className='trending'>
        { content && content.map((c)=>console.log(c)||
        <div key={c.id} >{
        
          singleContent(
            {
              title: c.title||c.name,
              id : c.id,
              poster:c.poster_path,
              date:c.first_air_date||c.release_date,
              media_type:type? "tv" : "movie",
              vote_average:c.vote_average,   
              overview:c.overview
           
            }
          )
          
        
        }
        </div>)}
        {searchText && 
        !content && 
        type ? <h2>NO Series Found</h2> : <h2>No Movie Found</h2>}
        </div>
        {pagination(setPage={setPage})}
    </div>
  )
}

export default Search
