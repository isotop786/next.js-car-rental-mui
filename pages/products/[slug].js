import { useRouter } from 'next/dist/client/router'
import React from 'react'
import data from '../../utils/data';
import Layout from '../../components/Layout';
import useStyles from '../../utils/styles';
import Head from 'next/head'
import NextLink from 'next/link'
import { CardContent, Link, Typography,Card } from '@mui/material';
import { Button,Grid,List,ListItem } from '@mui/material';
import Image from 'next/image';

const ProductScreen = () => {
    const router = useRouter();
    const {slug} = router.query;
    const product = data.products.find(product => product.slug ==slug)
    const classess = useStyles();
    if(!product){
        return (
            <Layout title="Product Not found">
                <div className={classess.productNotFound}>
                    <h3>Product Not Found</h3>
                </div>
            </Layout>
        )
    }

  return (
    <Layout title={product.name} description={product.description}> 
        <div className='my-3'>
            <NextLink href="/" passHref>
               <Link>
               <Button variant='contained'>Back</Button>
               </Link>
            </NextLink>
        </div>

        <Grid container spacing={1}>
            <Grid item md={6} xs={12}>
                <img src={product.image} alt={product.name} className="img-fluid"/>
            </Grid>
            <Grid item md={3} xs={12}>
                <List>
                    <ListItem><Typography variant='h4' component="h4">{product.name}</Typography></ListItem>
                    <ListItem><Typography>Category: {product.category}</Typography></ListItem>
                    <ListItem><Typography>Brand: {product.brand}</Typography></ListItem>
                    <ListItem><Typography>Rating: {product.rating} star ({product.numReviews} reviews)</Typography></ListItem>
                    <ListItem>
                        <Typography>
                            Description: {product.description}
                        </Typography>
                    </ListItem>
                </List>
            </Grid>

            <Grid item md={3} xs={12}>
                <Card>
                    <List>
                        <ListItem>
                            <Grid container>
                                <Grid item xs={6}><Typography>Rent: </Typography></Grid>
                                <Grid item xs={6}><Typography>${product.price} /Day</Typography></Grid>
                            </Grid>
                        </ListItem>
                        <ListItem>
                            <Grid container>
                                <Grid item xs={6}><Typography>Status: </Typography></Grid>
                                <Grid item xs={6}><Typography>{product.countInStock > 0 ? "Available" : "Not Available"}</Typography></Grid>
                            </Grid>
                        </ListItem>
                        <ListItem>
                           <NextLink href={`/booking/${product.slug}`}>
                                <Link>
                                <Button fullWidth variant='contained' color="primary">
                                    Make Booking
                                </Button>
                                </Link>
                           </NextLink>
                        </ListItem>
                    </List>
                </Card>
            </Grid>
        </Grid>
    </Layout>
  )
}

export default ProductScreen