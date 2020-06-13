import React from 'react';
import PanelNavigation from './Components/PanelNavigation';
import { Container, Grid} from '@material-ui/core';
import MainContent from './Components/MainContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
 
class App extends React.Component {



  render() {
    return (
      <div style={{ backgroundColor: '#E7EAED' }}>

        <Container style={{ height: '100vh'}}>
                <PanelNavigation />
                <MainContent/>
                {/* <Content/> */}
                <div style={{backgroundColor: '#3F51B5'}}>
                    <Box>
                        <Grid>
                            <Grid item xs={12}>
                                    <Box p={1}>
                                      <Typography style={{color: 'white'}} align="center">Xalqaro Islom Akademiyasi talabasi tomonidan yaratildi</Typography>
                                    </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
        </Container>
      </div>
    )
  }
}


export default App;
