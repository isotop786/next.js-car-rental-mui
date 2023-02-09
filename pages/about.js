import { Card, CardActionArea, CardContent, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import Layout from '../components/Layout'

const about = () => {
  return (
    <Layout>
        <Container>
            <div container className='row col-md-12'>
                <Typography variant='h3' component="h3">
                    Rentify Car Rental
                </Typography>
            </div>
            <div container className='row col-md-12 mt-4'>
                <Typography >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec purus mi, luctus nec nibh at, pellentesque cursus sem. Praesent quis vulputate dui. Nulla venenatis lacus vel felis cursus pulvinar. Nulla porta iaculis metus, vitae suscipit sem. Nulla id vestibulum nibh, non condimentum diam. Etiam pellentesque tempor mi sit amet convallis. Curabitur sem massa, tempus nec lobortis ut, maximus vitae ipsum. Etiam eleifend cursus dictum. Ut mi enim, blandit sit amet ante a, interdum viverra arcu. Sed finibus pulvinar finibus. Nam auctor diam arcu, vel maximus dolor tristique pharetra. Vivamus ut est iaculis, pulvinar purus sit amet, lobortis odio. Proin facilisis ut ante nec tristique.
                    Curabitur ultrices,
                </Typography>
            </div>

        </Container>
    </Layout>
  )
}

export default about