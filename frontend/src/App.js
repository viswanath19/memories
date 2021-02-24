import React from 'react';
import Posts from './components/Posts/posts';
import Forms from './components/Forms/forms';
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import memories from './assets/memories.png';
import useStyles from './styles';

const App = () => {
    const classes = useStyles();
    return (
       <Container maxWidth="lg">
           <AppBar className={classes.appBar} position="static" color="inherit">
               <Typography className={classes.heading} variant="h2" align="center">
                   My Memories
               </Typography>
               <img className={classes.image} src={memories} alt="my-memories" height="60"/>
           </AppBar>
           <Grow in>
               <Container>
                   <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                       <Grid item xs={12} sm={7}>
                            <Posts/>
                       </Grid>
                       <Grid item xs={12} sm={4}>
                            <Forms/>
                       </Grid>

                   </Grid>
               </Container>
           </Grow>
       </Container>
    );
}

export default App;