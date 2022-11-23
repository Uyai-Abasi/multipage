
import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
// import image from "./istockphoto.jpg";
import { Card, Typography, Grid } from "@mui/material";

import { useProvider } from "./context";
function Single() {
  const items = useProvider();
  let sliceditem = items.slice(0, 1);

  return (
    <Grid container spacing={1} p={3}  >
      {sliceditem.map((item,index) => (
        <Link to={`card${item.id}`}key={index} >
          <Stack direction="row" spacing={5} >
            <Card sx={{ maxWidth: 500 }}>
             
              <img src={item.image} alt="" />
            </Card>
            <Stack justifyContent="space-between" sx={{ m: 1, maxWidth: 400 }}>
              <Typography variant="h2">{item.article}</Typography>
              <Typography variant="h3">{item.header}</Typography>
              <Typography>{item.text}</Typography>
              <div className="small-section">
                <Card sx={{ maxWidth: 345 }}>
                  <img className="tiny-img" src={item.image} alt="" />
                </Card>
                <aside>
                  <Typography>{item.title}</Typography>
                  <Typography>{item.date}</Typography>
                </aside>
              </div>
            </Stack>
          </Stack>
        </Link>
      ))}
    </Grid>
  );
}

export default Single;
