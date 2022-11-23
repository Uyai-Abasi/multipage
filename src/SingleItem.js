import React from "react";
import {Card, Typography, Box, Stack} from "@mui/material";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

const SingleItem = (props) => {
  return (
  

     <Grid item md={4}  > 
      <Box key={props.id} >
        <Link to={`card${props.id}`}>

          <Stack sx={{color:"black",maxWidth:"376px"}}>
            <img src={props.image} alt="" style={{
                width: '370px'
              }}
              />
            <Typography sx={{color:"blue"}}>{props.article}</Typography>
            <Typography variant="h6">{props.header}</Typography>
            <Typography variant="body2">{props.text}</Typography>
            <Box className="small-section">
            <Card sx={{ maxWidth: 345}}>   <img className="tiny-img" src={props.image} alt="" /></Card>
              <aside>
                <Typography>{props.title}</Typography>
                <Typography>{props.date}</Typography>
              </aside>
            </Box>
          </Stack>
        </Link>
      </Box>
    </Grid>
   
  );
};

export default SingleItem;
