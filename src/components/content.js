import { DataGrid } from '@material-ui/data-grid';
import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/grid";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Spin from './spin';

const size = window;
const cols = [
    { field: 'id', headerName: 'ID', width: size.innerWidth * .1},
    { field: 'slot', headerName: 'Slot 1-3', width: size.innerWidth *.15 },
    { field: 'time', headerName: 'Time', width: size.innerWidth * .20 }
];
const currentTime = new Date().toLocaleString();

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

const Content = ({balance,decrease}) => {
    const classes = useStyles();
    const [rows,setRows] = useState([]);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return(
        <Grid container justify='center' alignItems='center'>
            <Grid item style={{ height: 600,width: '80%' }}>
                <DataGrid rows={ rows } columns={ cols } />
                <br />
                <Button 
                    size='large' 
                    color='primary' 
                    variant='contained'
                    onClick={ handleOpen }
                    disabled={balance == null || balance < 1 
                              ? true : false}
                >Play
                </Button>
            </Grid>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
                >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <Grid container>
                            <Spin onClose={handleClose} balance={balance} decrease={ decrease }></Spin>
                        </Grid>
                    </div>
                </Fade>
            </Modal>
        </Grid>
    );
}

export default Content