import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import AboutCard from '../components/aboutCard';

const useStyles = makeStyles((theme) => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
}));

const Sidebar = (props) => {
  const classes = useStyles();
  const { archives, description, social, title } = props;

  return (
    <Grid item xs={12} md={4}>
        <AboutCard />
      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Archives
      </Typography>

      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Social
      </Typography>

        <Link display="block" variant="body1" href="#">
          <Grid container direction="row" spacing={1} alignItems="center">
            <Grid item>

            </Grid>
            <Grid item>name</Grid>
          </Grid>
        </Link>

    </Grid>
  );
}

Sidebar.propTypes = {
  archives: PropTypes.array,
  description: PropTypes.string,
  social: PropTypes.array,
  title: PropTypes.string,
};

export default Sidebar;
