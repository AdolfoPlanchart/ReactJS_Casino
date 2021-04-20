import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import '../css/spin.css'
import { useState } from 'react';

const SlotCard = (number) => {
    return(
        <Grid item  xs={4}>
            <Card>
                <CardContent>
                        <Typography color="textSecondary" variant='h6' align='center'>
                            {number}
                        </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}

const ButtonComponent = (functionToCall,text) => {
    return(
        <Grid item>
            <Button 
                color='primary'
                variant='contained'
                onClick={ functionToCall }
            >
                {text}
            </Button>
        </Grid>
    );
}

const msg='spin the wheel';

const Spin = ({onClose,balance,decrease}) => {
    const [numbers,setNumbers] = useState([0,0,0]);

    const handleRandomNumber = () => {
        const newBalance = decrease(1);

        if(newBalance < 1) {
            console.log(balance)
            return(
                onClose()
            );
        }

        const newNumbers = [];

        numbers.map(() => {
            return(
                newNumbers.push(Math.floor(Math.random() * 10))
            );
        });

        

        setNumbers(newNumbers);
    }

    const handleDebugNumbers = () => {
        setNumbers([7,7,7]);
    }

    return(
        <Grid container>
            <Grid container spacing={4} className='containerPadding'>
                {SlotCard(numbers[0])}
                {SlotCard(numbers[1])}
                {SlotCard(numbers[2])}
            </Grid>
            <Grid container>
                { ButtonComponent(handleRandomNumber,'Spin the Wheel') }
                { ButtonComponent(handleDebugNumbers,'Debug') }
                { ButtonComponent(onClose,'Cancel') }
            </Grid>
        </Grid>
    );
}

export default Spin