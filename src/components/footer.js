import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/grid";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    appBarSeparator: theme.mixins.toolbar
  }));

const Footer = () => {
    const classes = useStyles();
    return(
        <Grid container className="Footer">
            <div className={ classes.appBarSeparator } />
            <AppBar position='fixed' style={{ top: 'auto',bottom:0 }}>
                <Toolbar>
                    <Grid container justify='center'>
                        <Typography>
                            Copyrigth React Casino 2021
                        </Typography>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Grid>
    );
}

export default Footer