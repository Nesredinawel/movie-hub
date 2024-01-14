import * as React from 'react';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';


export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState(0);
  
  const navigate = useNavigate();
  React.useEffect(() =>{
 if(value === 0) navigate("/");
 else if(value === 1) navigate("/movies");
 else if(value === 2) navigate("/series");
 else if(value === 3) navigate("/search");
   },[value,navigate]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width:'100%',position:'fixed',
    bottom:0,left:0,right:0,background:'#2d313a', zIndex:100,}} value={value} onChange={handleChange}>
      <BottomNavigationAction
      style={{color:'white'}}
        label="Trending"
      
        icon={<WhatshotIcon />}
      />
      <BottomNavigationAction
      style={{color:'white'}}
        label="Movies"
       
        icon={<MovieIcon />}
      />
      <BottomNavigationAction
      style={{color:'white'}}
        label="TV Series"
     
        icon={<TvIcon />}
      />
      <BottomNavigationAction 
      style={{color:'white'}}
      label="Search"
      
      icon={<SearchIcon />} />
    </BottomNavigation>
  );
}
