import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 1000,
    marginRight: 200,
    marginLeft: 200,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: '#659D89',
  },
}));

export default function ProfileCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            G
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
          </IconButton>
        }
        title="George"
        subheader="September 1, 2019"
      />
      <CardMedia
        className={classes.media}
        image="./images/profile.jpg"
        title="profile"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Hello, I'm George.<br />
          ForndEnd Web Developer.<br />
          Here is my Profile<br />
          Age: 26<br />
          Where I'm formed: Gifu<br />
          BloodType: A<br />
        </Typography>
      </CardContent>
    </Card>
  );
}
