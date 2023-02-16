import React from 'react';
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
  }));

function ContentSection() {
  const classes = useStyles();

  return (
    <Box width="100%">
      <Grid container spacing={0}>
        <Grid item xs={12} md={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia className={classes.media} image="https://media.discordapp.net/attachments/997271689769529394/1075766150220218468/Warmizt_image_of_people_studying_for_a_elearning_website_2c0e47a3-27ca-4d6d-8ad3-8801ee03e70f.png?width=250&height=250" title="Course 1" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Course 1
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed ultrices justo.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
              <Button size="small" color="primary">
                Enroll Now
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia className={classes.media} image="https://media.discordapp.net/attachments/997271689769529394/1075766157409275965/Warmizt_image_of_people_studying_for_a_elearning_website_d6b9cf9c-3e45-49a5-b89a-e6d860abb72c.png?width=250&height=250" title="Course 2" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Course 2
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed ultrices justo.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
              <Button size="small" color="primary">
                Enroll Now
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia className={classes.media} image="https://media.discordapp.net/attachments/997271689769529394/1075766180033335396/Warmizt_image_of_people_studying_for_a_elearning_website_850ad439-9912-4906-aa98-c13f4aadfc02.png?width=250&height=250" title="Course 1" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Course 3
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed ultrices justo.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
              <Button size="small" color="primary">
                Enroll Now
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ContentSection;