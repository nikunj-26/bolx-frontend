import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
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
    maxWidth: 250,
    maxHeight: 275,
    marginTop: 20,
    marginBottom: 20,
  },
  media: {
    height: 180,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  const history = useHistory();

  const clickme = () => {
    history.push({
      pathname: "/sub",
      search: props.id,
    });
    //console.log(event);
    // alert("Card Clicked!");
  };
  return (
    <Col xs="4">
      <Card
        className={classes.root}
        onClick={() => {
          clickme();
        }}
      >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={"http://localhost:5000/images/" + props.image}
            title={"Contemplative Reptile"}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
              {
                /*<IconButton
                  aria-label="add to favorites"
                  style={{ float: "right" }}
                  onClick={() => {
                    alert("Button Clicked");
                    }}
                >*/
                <FavoriteIcon
                  aria-label="add to favorites"
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
