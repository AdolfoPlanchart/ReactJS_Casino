import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/grid";

const Header = () => {
    return(
        <Grid container className="App">
        <AppBar position='static'>
          <Toolbar>
            <Grid container xs='6'>
              <Typography variant='h6'>
                React Casino
              </Typography>
            </Grid>
            <Grid container xs='6' justify='flex-end' alignItems='center'>
              <Typography variant='h6'>
                $0.00
              </Typography>
            <Button color='inherit' >
              Login
            </Button>
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
    );
}

export default Header