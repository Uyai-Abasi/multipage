import SingleItem from "./SingleItem";
// import "./display.css";
import { Stack,Box, Grid, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Nav from "./Nav";
import Single from "./Single";

// import card from './card'
const Display = (props) => {
  let items = props.data;

  return (
    <div>
      <Nav />
<Grid container 
sx={{
  padding:"50px 250px",
  alignItems: "center",
  bgcolor: "blue",
  marginTop: "90px",
  textAlign: "center",
  // border:"solid red"
}}>
  <Grid justifyContent="center" item md={12} sx={{display:"flex"}}>
      <h2>BLOG</h2>

  </Grid>

</Grid>
<Box sx={{display:'flex', justifyContent:'center'}}>

<TextField placeholder='fantasy' sx={{marginTop:"-30px", width:'500px',bgcolor:"white" }} />
</Box>

<Stack spacing={2} direction="row" justifyContent="center">
        <Button
          variant="contained"
          sx={{ width:{md: "100px" }, borderRadius: "50px" }}
        >
          All
        </Button>
        <Button variant="text">Fantasy</Button>
        <Button variant="text">NFT</Button>
        <Button variant="text">Abstract</Button>
        <Button variant="text">Anime</Button>
        <Button variant="text">Games</Button>
        <Button variant="text">Technology</Button>
      </Stack> 
     
      <Grid container spacing={1} p={2} >
     <Single/>
        {items.map((item) => (
          <SingleItem {...item} key={item.id} />
        ))}
     
      </Grid>

  

    </div>
  );
};

export default Display;
