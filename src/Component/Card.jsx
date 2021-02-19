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

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  const clickme = (event) => {
    console.log(event);
    // alert("Card Clicked!");
  };
  return (
    <Card
      className={classes.root}
      onClick={(event) => {
        clickme(event);
      }}
    >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/large-2479-s-classsaloon.jpg?itok=QTxMln2k"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Car
            {/* <IconButton
              aria-label="add to favorites"
              style={{ float: "right" }}
              onClick={() => {
                alert("Button Clicked");
              }}
            >
              <FavoriteIcon />
            </IconButton> */}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            Car are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
