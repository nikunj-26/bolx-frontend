import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";

import { Col } from "reactstrap";

const useStyles = makeStyles({
  root: {
    width: 300,
    height: 275,
    marginTop: 20,
    marginBottom: 20,
  },
  media: {
    height: 180,
  },
});

export default function MediaCard(props) {

  const classes = useStyles();

  const clickme = (event) => {
    console.log(event);
    // alert("Card Clicked!");
  };
  return (
    <Col xs="4">
      <Card
        className={classes.root}
        onClick={(event) => {
          clickme(event);
        }}
      >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={"http://localhost:5000/images/"+props.image}
            title={"Contemplative Reptile"}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
              { /*<IconButton
                  aria-label="add to favorites"
                  style={{ float: "right" }}
                  onClick={() => {
                    alert("Button Clicked");
                    }}
                >*/
                <FavoriteIcon aria-label="add to favorites"
                  style={{ float: "right" }}
                  onClick={() => {
                    alert("Button Clicked");
                  }} 
                />
                /*</IconButton>*/ 
              }
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Col>    
  );
}
