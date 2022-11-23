import React from "react";
import { useParams} from "react-router-dom";
import { Stack, Box,Container, } from "@mui/material";
import Nav from "./Nav";
import { Typography, Paper,Grid } from "@mui/material";
import "./display.css";
import { useProvider } from "./context";
import { BsInstagram } from "react-icons/bs";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";

const Card = () => {
  const items = useProvider();
  const { id } = useParams();

  let itemfound = items.find((item) => item.id === id);
  let filtereditems = items.filter(
    (item) => item.article === itemfound.article
  );
  console.log(filtereditems);
  // let itemfound=items.find((item) => item.article === itemfound.article)
  // let itemfound=items.find((item) => {
  //   if (item.id === id) {
  //     return item
  //     // console.log(item);
  //   }

  // })

  // console.log(itemfound)

  return (
    <>
      <Nav />
      <Paper
        component="form"
        sx={{
          alignItems: "center",
          width: "100%",
          height: "200px",
          bgcolor: "blue",
          marginTop: "100px",
          textAlign: "center",
        }}
      >
        <Stack direction="row" justifyContent="space-between" p={3}  >
          <Stack>
            <Typography variant="h4">{itemfound.article}</Typography>
            <Typography variant="h5">{itemfound.header}</Typography>
          </Stack>
          <Container sx={{width:"250px",height:"100px" }}>
          <Stack direction="row" justifyContent="space-around"  alignItems="center">
            <BsInstagram />
            <SlSocialLinkedin />
            <SlSocialTwitter />
          </Stack>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Box>
              <img
                src={itemfound.image}
                alt=""
                style={{ width: "50px", height: "50px", borderRadius: "50px" }}
              />
            </Box>
            <div>
              <Typography>{itemfound.title}</Typography>
              <Typography>{itemfound.date}</Typography>
            </div>
          </Stack>
          </Container>
        </Stack>
      </Paper>

       <div style={{marginTop:"-50px"}} >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        placement="top"
        >

        <Box sx={{ maxWidth:{md: 345,sm:"50"} }} >
          <img src={itemfound.image} alt="" />
        </Box>
        <Typography>{itemfound.text}</Typography>
       
      </Stack>
  </div>
     <center>
        <h1>Related Article</h1>
      </center>
 
      <Grid container spacing={1} p={2} sx={{gap:"30px"}}>
        
        {filtereditems.map((item) => (
          <Stack sx={{ maxWidth: 400 }} justifyContent="space-between">
            <Typography variant="h3">{item.article}</Typography>
            <Typography variant="h4">{item.header}</Typography>
            <Typography>{item.text}</Typography>

            <div>
              <img src={item.image} alt="" />
              <Typography>{item.title}</Typography>
              <Typography>{item.date}</Typography>
            </div>
          </Stack>
        ))}
      </Grid>
  
    </>
  );
};

export default Card;
