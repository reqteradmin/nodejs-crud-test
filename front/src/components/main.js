import { useState } from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

export default function Main() {
    const [firstName,setFirstName] =useState('');
    const [lastName,setLastName] =useState('');
    const [phoneNumber,setPhoneNumber] =useState('');
    const [dateOfBirth,setDateOfBirth] =useState('');
    const [email,setEmail] =useState('');
    const [bankAccountNumber,setBankAccountNumber] =useState('');
    const [emailErrorText,setEmailErrorText] = useState('');
    const [bankAccountErrorText,setBankAccountErrorText] = useState('');

    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    //we assume for bank account number just it's length must be greater than 10.For more vlidation must be added here.
    const checkBankAccountNumber = () =>{
        if(bankAccountNumber.length <10 )
            return false;
        return true;
    }
    const handleSaveCustomer= () =>{
        let hasError = false;
        if(!emailRegex.test(email))
        {
          hasError=true;
          setEmailErrorText('Please enter an valid email');
        }
        else
        {
          setEmailErrorText('');
        }
        if(!checkBankAccountNumber())
        {
            hasError = true;
            setBankAccountErrorText('Bank account number is not valid.');
        }
        else
            setBankAccountErrorText('');

    }

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Customer Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            variant="standard"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            variant="standard"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="dateOfBirth"
            name="dateOfBirth"
            label="Date Of Birth"
            fullWidth
            variant="standard"
            value={dateOfBirth}
            onChange={e => setDateOfBirth(e.target.value)}

          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            fullWidth
            variant="standard"
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            variant="standard"
            value={email}
            onChange={e => setEmail(e.target.value)}
            error= {!!emailErrorText}
            helperText ={emailErrorText && emailErrorText}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="bankAccountNumber"
            name="bankAccountNumber"
            label="Bank Account Number"
            fullWidth
            variant="standard"
            value={bankAccountNumber}
            onChange={e => setBankAccountNumber(e.target.value)}
            error= {!!bankAccountErrorText}
            helperText ={bankAccountErrorText && bankAccountErrorText}
          />
        </Grid>
        <Grid item xs={12}>
        <Button variant="contained" onClick={handleSaveCustomer}>Save</Button>
        </Grid>
      </Grid>
    </>
  );
}