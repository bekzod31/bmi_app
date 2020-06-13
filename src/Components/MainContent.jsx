import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Content from './Content';
import TranslateIcon from '@material-ui/icons/Translate';
import SpellcheckIcon from '@material-ui/icons/Spellcheck';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import AssignmentIcon from '@material-ui/icons/Assignment';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import InfoIcon from '@material-ui/icons/Info';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

 

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  tabContent: {
    height: '75vh'
  }
}));

export default function MainContent() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Конвертор" icon={<TranslateIcon />} {...a11yProps(0)} />
          <Tab label="Буквы" icon={<SpellcheckIcon />} {...a11yProps(1)} />
          <Tab label="Граматика" icon={<AssignmentIcon />} {...a11yProps(2)} />
          <Tab label="Видео Уроки" icon={<VideoLibraryIcon />} {...a11yProps(3)} />
          <Tab label="Книги" icon={<MenuBookIcon />} {...a11yProps(4)} />
          <Tab label="Руководство" icon={<TouchAppIcon />} {...a11yProps(5)} />
          <Tab label="О нас" icon={<InfoIcon />} {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} className={classes.tabContent}>
        <Content />
      </TabPanel>
      <TabPanel value={value} index={1} className={classes.tabContent}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2} className={classes.tabContent}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3} className={classes.tabContent}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4} className={classes.tabContent}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5} className={classes.tabContent}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6} className={classes.tabContent}>
        Item Seven
      </TabPanel>
    </div>
  );
}
