
// import Typography from '@mui/joy/Typography';
// import { Grid, TextField } from '@mui/material';
// import React, { useEffect, useState } from 'react'
// import Recipe from './Recipe';
// import axios from 'axios';
// import { Card } from '@mui/joy';
// import CardContent from '@mui/joy/CardContent';
// import IconButton from '@mui/material/IconButton';
// import SearchIcon from '@mui/icons-material/Search';
// const App = () => {
//   const [search,setsearch]=useState('');
//   const [result,setresult]=useState([]);


//    const fetchrecipe=async(req,res)=>{
//     const app_id='47c127d2';
//     const apikey='8a90ac4bb583460932887380e6366f1c'
//     const url=`https://api.edamam.com/search?q=${search}&app_id=${app_id}&app_key=${apikey}`
//     const response=await axios.get(url);

//     console.log(response.data.hits);

//     setresult(response.data.hits);
//   }
//   useEffect(()=>{
// fetchrecipe();
//   },[]);
//   return (
//     <div>
//       <Typography level="h1" color="warning" textAlign="center" textTransform="capitalize">recipe search app</Typography>
//       <hr style={{width:"30%",border:"5px solid brown",borderRadius:"5px"}}/>
//       <div className='main'>
//         <TextField 
//         variant='outlined'
//         label='search recipe'
//         fullWidth
//         InputProps={{
//           endAdornment: (
//             <IconButton onClick={()=>fetchrecipe()}>
//               <SearchIcon/>
//             </IconButton>
//           ),
//         }}
//         value={search}
//         onChange={(e)=>setsearch(e.target.value)}
//         />
//       </div>
//          <Grid container spacing={2}>
//      {result.map((item, index) => (
//         <Grid item xs={12} sm={6} md={4} key={index}>
//           <Card style={{margin:"10px"}}>
//             <CardContent style={{color:"brown"}}>
//               <Recipe
//                 label={item.recipe.label}
//                 calories={item.recipe.calories}
//                 img={item.recipe.image}
//                 ingredientLines={item.recipe.ingredientLines}
//               />
             
//             </CardContent>
//           </Card>
//         </Grid>
//       ))}
      
//   </Grid>
//     </div>
//   )
// }

// export default App


import React, { useState } from 'react'
import './App.css'
import Typography from '@mui/joy/Typography';
import { Card, CardContent, Grid, TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import Recipe from './Recipe';
const App = () => {

  const [search,setsearch]=useState("");
  const [result,setresult]=useState([]);

  const fetchrecipe=async()=>{

    const app_id='47c127d2';
    const apikey='8a90ac4bb583460932887380e6366f1c'
    const url=`https://api.edamam.com/search?q=${search}&app_id=${app_id}&app_key=${apikey}`
    const response=await axios.get(url);

    console.log(response.data.hits);

    setresult(response.data.hits);


  }
  return (
    <div>
       <Typography level='h1' color="warning" textAlign="center" textTransform="capitalize">
        recipe search app
       </Typography>
       <hr className='hr'/>

       <TextField 
       variant='outlined'
       label='search recipe'
       fullWidth
       value={search}
       onChange={(e)=>setsearch(e.target.value)}

       InputProps={{
        endAdornment: (
          <IconButton onClick={()=>fetchrecipe()}>
            <SearchIcon/>
          </IconButton>
        ),
      }}
       />

       <Grid container spacing={2}>
       {
        result.map((item,index)=>(
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card style={{margin:"10px"}}>
              <CardContent style={{color:"brown"}}>
                <Recipe
                 label={item.recipe.label}
                 calories={item.recipe.calories}
                img={item.recipe.image}
                 ingredientLines={item.recipe.ingredientLines}
                 />

              </CardContent>
            </Card>
          </Grid>
        ))
       }
       </Grid>
      
    </div>
  )
}

export default App