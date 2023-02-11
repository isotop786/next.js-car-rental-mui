import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import data from '../utils/data'
import { Card, Button,CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography,Paper, Link  } from '@mui/material'
import image from 'next/image'
import NextLink from "next/link"
import sytles from '../styles/Home.module.css'

import Carousel from 'react-material-ui-carousel'
import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'

export default function Home() {
  const {products, productsPro} = data;
  const router = useRouter();
  const { status } = router.query;
  useEffect(()=>{
    if(status =='success'){
      setTimeout(()=>{
        router.push('/');
      },1500)
    }
  },[])
  return (
    <Layout title="Home page" description="Rent your dream car with GariWala - the premier car rental agency. Choose from a wide range of reliable and affordable vehicles, with flexible rental options to suit your needs. Book now and enjoy a hassle-free ride with GariWala">
     
      {status && status === 'success' &&(
          <Grid container className='my-4'>
          <Grid item>
            <Typography variant='h3' component='h4' className='text-success'>
              Payment Success
            </Typography>
          </Grid>
        </Grid>
      )}

      {status && status === 'success' && setTimeout(()=>{router.push('/')},2000)}
    
      <Grid container className='my-4 pb-3'>
        <Grid item>
          <Typography variant='h3' component='h1'>
            Available Vehicles
          </Typography>
        </Grid>
      </Grid>
      <Grid container className='my-4'>
        <Grid item xs={12} className={styles.caro}>
        <Carousel>
            {
                productsPro.map( (item, i) =>{
              
                  return(
                    <>
                      <Card >
                      <Typography variant='h5' component="h2">{item.name}</Typography>
                      <div style={{display:"flex",justifyContent:"space-between",flexDirection:"row"}}>
                        <Grid item><img src={item.image} height={380}/></Grid>
                        <Grid item style={{padding:"1rem", background:"#ddd"}}> 
                          <Typography className='mb-2'>{item.description}</Typography>
                          <NextLink href={`/products/${item.slug}`} passHref>
                            <Link>
                            <Button variant='contained'>
                            Check it out!
                          </Button>
                            </Link>
                          </NextLink>
                        </Grid>
                      </div>
                    </Card>
                    </>
                  )
                 
                })
            }
        </Carousel>
        </Grid>
      </Grid>

      

      <Grid container spacing={3} className="py-3">
      {products.map((product,i)=>(
        <Grid item key={i} md={4}>
          <Card>
          <NextLink href={`/products/${product.slug}`} passHref>
             <CardActionArea>
                <CardMedia component="img"
                  image={product.image}
                  title={product.name}
                  height={250}
                >
                </CardMedia>
                <CardContent>
                  <Typography >
                      {product.name}
                  </Typography>
                </CardContent>
             </CardActionArea>
             </NextLink>
             <CardActions style={{display:"flex",justifyContent:"space-between"}}>
                  <Typography >${product?.price} / Day</Typography>
                <NextLink href={`/products/${product.slug}`} passHref>
                  <Link>
                    <Button variant='contained' size='small' color='primary' >Book Now</Button>
                  </Link>
                </NextLink>
             </CardActions>
           
          </Card>
        </Grid>
       ))}
      </Grid>
    </Layout>
  )
}
