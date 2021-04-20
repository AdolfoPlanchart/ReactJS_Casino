import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/grid";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    appBarSeparator: theme.mixins.toolbar
  }));

const Header = ({balance}) => {
    const classes = useStyles();
    return(
        <Grid container className="Header">
        <AppBar position='fixed'>
          <Toolbar>
            <Grid container>
              <Typography variant='h6'>
                React Casino
              </Typography>
            </Grid>
            <Grid container justify='flex-end' alignItems='center'>
              <Typography variant='h6'>
                { balance == null ? '$0.00' : '$' + balance}
              </Typography>
            <Button color='inherit' >
              Login
            </Button>
            </Grid>
          </Toolbar>
        </AppBar>
        <div className={ classes.appBarSeparator } />
      </Grid>
    );
}

export default Header