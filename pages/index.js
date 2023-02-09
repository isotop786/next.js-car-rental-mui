import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import data from '../utils/data'
import { Card, Button,CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import image from 'next/image'
import NextLink from "next/link"
export default function Home() {
  const {products} = data;
  return (
    <Layout title="Home page">
     

      <Grid container className='my-4'>
        <Grid item>
          <Typography variant='h3' component='h3'>
            Available Vehicles
          </Typography>
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
                  <Typography >${product?.price}</Typography>
                  <Button variant='contained' size='small' color='primary' >Rent Now</Button>
             </CardActions>
           
          </Card>
        </Grid>
       ))}
      </Grid>
    </Layout>
  )
}
