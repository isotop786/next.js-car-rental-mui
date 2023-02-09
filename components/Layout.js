import { AppBar, Toolbar, Typography,Link } from '@mui/material'
import { Container } from '@mui/system'
import Head from 'next/head'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import useStyles from '../utils/styles';
import NextLink from "next/link"
const Layout = (props) => {
    const classess = useStyles();
  return (
    <div>
        <Head>
            <title>{props.title? `${props.title} - GariWala`: `GariWala`}</title>
            {props.description && <meta name='description' content={props.description}></meta>}
        </Head>
        <AppBar position='static' className={classess.navbar} >
            <Toolbar>
                <NextLink href="/" passHref>
                    <Link>
                        <Typography variant='h4' className={classess.brand }>GariWala</Typography>
                    </Link> 
                </NextLink>

                <div className={classess.grow}></div>
                    <div className={classess.subNav}>
                        <NextLink href="/about" passHref>
                            <Link>
                                <Typography>About</Typography>
                            </Link>
                        </NextLink>
                    </div>
              
            </Toolbar>
        </AppBar>

        <Container className={classess.main}>
            {props.children}
        </Container>

        <footer className={classess.footerStyle}>
            <Typography>
                All right reserve. GariWala &copy; {new Date().getFullYear()}
            </Typography>
        </footer>
    </div>
  )
}

export default Layout