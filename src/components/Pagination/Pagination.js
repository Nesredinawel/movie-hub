import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const pagination = ({setPage,numOfPage=500}) => {
  const handlePageChange =(page) =>
{
  setPage(page);
  window.scroll(0,0)
} 
 return (
    <div style={{width:"100%",
    display:"flex",
    justifyContent:"center",
    marginTop:10}}>
       <Stack spacing={2}>
    
      <Pagination  onChange={(e) => handlePageChange(e.target.textContent)} count={numOfPage} variant="outlined" shape="rounded" />
      
    </Stack>
    </div>
  )
}

export default pagination
