import { Button, Card, Grid, Link, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react'
import Layout from '../../components/Layout'
import data from '../../utils/data';
import Box from '@mui/material/Box';
import {userState,useEffect} from 'react'
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import NextLink from 'next/link'
const Booking = () => {
    const [days,setDays] = useState(1)
    const [isClicked,setIsClicked] = useState(false)
    const [confirm,setConfirm] = useState(false)
    const [fname,setFname] = useState('')
    const [lname,setLname] = useState('')
    const [charge,setCharge] = useState(1)
    const router = useRouter();
    const {slug} = router.query;
    const product = data.products.find(product => product.slug ==slug)
    useEffect(()=>{
        
    },[charge,days])
    function chargeHandler(){
        setCharge(days * product?.price)
    }

    const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
    const stripePromise = loadStripe(`pk_test_51MZbJHB1DfwD5KqSLFBNII43hECalq9QUoEPm5F2HCsarbhIPm2eEScOTOZERH8CTGOQNMTKQNBPuleIeA92pB4200QKhGwPU3`);

    const createCheckOutSession = async () => {
        setIsClicked(true)
        const stripe = await stripePromise;
        const checkoutSession = await axios.post('/api/create-stripe-session', {
          item: {
            name: product?.name,
            images: "https://next-js-car-rental-mui.vercel.app"+product?.image,
            price:product?.price,
            quantity: days
            // quantity: 5
          },
        });
        const result = await stripe.redirectToCheckout({
          sessionId: checkoutSession.data.id,
        });
        if (result.error) {
          alert(result.error.message);
        }
      };
      
      const handleProcess = ()=>{
        setIsClicked(true)
        setTimeout(()=>{
            setConfirm(true)
            setIsClicked(false)
        },1500)
      }


  return (
    <Layout title={product?.name+" booking"}>
 
        <div className='row'>
        <div className='col-md-12'>
            <div className='my-3'>
            <Typography variant='h5'>
                    {product?.name} Reservation
            </Typography>
            </div>
            <Box
  component="form"
  sx={{
    '& .MuiTextField-root': { m: 1, width: '25ch' },
  }}
  noValidate
  autoComplete="off"
>

  <div>
    <TextField
      required
      id="filled-required"
      label="First Name"
      variant="filled"
      defaultValue={fname}
      onChange={e=>setFname(e.target.value)}
    />
    <TextField
      required
      id="filled-required"
      label="Last Name"
      variant="filled"
      defaultValue={lname}
      onChange={e=>setLname(e.target.value)}
    />
    <TextField
      required
      id="filled-required"
      label="Email"
      variant="filled"
      type="email"
    />

    <TextField
      required
      id="filled-required"
      label="Contact Number"
      variant="filled"
    />
    <TextField
      required
      id="filled-required"
      label="National ID Number"
      variant="filled"
    />
    <TextField
      required
      id="filled-required"
      label="Origin"
      variant="filled"
    />
    <TextField
      required
      id="filled-required"
      label="Destination"
      variant="filled"
    />
    <TextField
      required
      id="filled-required"
      label="Travel Date"
      variant="filled"
      type="date"
    />

    <TextField
      id="filled-number"
      label="Number of Passengers"
      type="number"
      InputLabelProps={{
        shrink: true,
      }}
      variant="filled"
    />
    <TextField
      id="filled-number"
      label="Number of days for reservation"
      type="number"
      InputLabelProps={{
        shrink: true,
        min:1,
        max:10
      }}
      InputProps={{
        inputProps: { 
            max: 10, min: 1 
        }
    }}
      variant="filled"
      min={1}
      defaultValue={days}
      onClick={(e)=> setDays(e.target.value)}
    />


  </div>
  
</Box>

<Box sx={{marginTop:"2rem"}}>
     <Grid container>
        <Grid item md={2}>
            <Typography variant='h6'>
                Total Charge
            </Typography>
        </Grid>
        <Grid item md={2}>
            <Typography variant='h6'>
                ${parseInt(product?.price) * parseInt(days)}
               
            </Typography>
        </Grid>
     </Grid>
     <Grid container className='mt-4'>
        <Grid item md={2}>
            
        </Grid>
        <Grid item md={2}>
        </Grid> 
        <Grid item md={2}>
        {!isClicked ? (
            <Button variant='contained'
            onClick={createCheckOutSession}
            disabled={fname=='' && lname==''}
           >Checkout</Button>
        ):(
            <button class="btn btn-primary" type="button" disabled>
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Processing...
            </button>
        )}
        </Grid>
     </Grid>
</Box>
        </div>
    </div>
  
        
        
    </Layout>
  )
}

export default Booking