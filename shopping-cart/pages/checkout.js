import React from 'react';
import styles from '../styles/Checkout.module.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

function checkout() {
  return (
    <div className={styles.container}>
      <div className={styles.paymentForm}>
        <h2>Checkout</h2>
        <Box mb={4} mt={2}
          component="form"
          noValidate
          autoComplete="off"
        >
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="outlined-adornment-amount">Card Holder</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              label="Card Holder"
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="outlined-adornment-amount">Card Number</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              label="Card Number"
            />
          </FormControl>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                sx={{ m: 1 }}
                fullWidth
                required
                id="outlined-required"
                label="Expiration Date"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                sx={{ m: 1 }}
                fullWidth
                required
                id="outlined-required"
                label="CVC"
              />
            </Grid>
          </Grid>
        </Box>
        <Button size="large" variant="contained">Make Payment</Button>
      </div>
    </div>
  );
}

export default checkout;