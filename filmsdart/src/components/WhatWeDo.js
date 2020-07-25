import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { TextareaAutosize } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: "90%",
    display: "flex",
    justifyContent: "spaceBetween",
    margin: "auto",
  },
  media: {
    height: 250,
  },
  typo: {
    alignItems: "center",
  },
  cardMargin: {
    margin: 10,
  },
});

const WhatWeDo = () => {
  const classes = useStyles();

  return (
    <div data-aos="zoom-in-up" data-aos-duration="3000">
      <div data-aos="fade-up" data-aos-duration="4000" className="whatWeDo">
        <Typography variant="h4">What We Do</Typography>
      </div>
      <Card className={classes.root}>
        <CardActionArea className={classes.cardMargin}>
          <CardMedia
            className={classes.media}
            image="/images/giphy.gif"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Research
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              We undertake thorough and neutral field research to uncover
              precious hidden stories and unique personalities.
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* 2nd card */}

        <CardActionArea className={classes.cardMargin}>
          <CardMedia
            className={classes.media}
            image="/images/giphy-1.gif"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Filming
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              We film using state-of-the-art technology and techniques, ensuring
              we capture your story in the best possible light.
            </Typography>
          </CardContent>
        </CardActionArea>

        {/* 3rd card */}

        <CardActionArea className={classes.cardMargin}>
          <CardMedia
            className={classes.media}
            image="/images/giphy-2.gif"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Post-Production
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              We edit using only the best tools, including the Adobe Creative
              Cloud
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <div
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
        className="whatWeDo"
      >
        <Button variant="outlined" color="secondary">
          See More
        </Button>
      </div>
    </div>
  );
};

export default WhatWeDo;
