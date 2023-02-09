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

export default function Home() {
  const {products, productsPro} = data;
  return (
    <Layout title="Home page">
     

      <Grid container className='my-4'>
        <Grid item>
          <Typography variant='h3' component='h3'>
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
                      <Card>
                      <Typography variant='h4' component="h4">{item.name}</Typography>
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

      

      <Grid container spacing={3}>
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
