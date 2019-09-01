import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';

const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '#659D89',
  },
})(Tabs);

const AntTab = withStyles(theme => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    '&:hover': {
      color: "#1890ff",
      opacity: 1,
    },
    '&$selected': {
      color: '#659D89',
    },
  },
  selected: {},
}))(props => <Tab disableRipple {...props} />);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  }
}))

export default function TabBar()  {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AntTabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
      >

        <AntTab component={Link} to={'/'} label='Home' />
        <AntTab component={Link} to={'/profile'} label='Profile' />
        <AntTab component={Link} to={'/artworks'} label='ArtWorks' />
      </AntTabs>
      </div>
  );
}