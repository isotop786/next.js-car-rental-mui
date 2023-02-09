import { Grid, Typography } from '@mui/material'
import React from 'react'
import Layout from '../components/Layout'
import useStyles from '../utils/styles'

const NotFound = () => {
    const classess = useStyles();
  return (
    <Layout>
        <div className={classess.centerContent}>
            <Typography variant='h3' component="h3">
                    Sorry page not found
            </Typography>
        </div>
                
               
    </Layout>
  )
}

export default NotFound