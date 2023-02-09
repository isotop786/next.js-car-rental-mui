import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.css"
import { useEffect } from "react"
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  useEffect(()=>{
      const jssStyles = document.querySelector("#jss-server-side");
      if(jssStyles){
        jssStyles.parentElement.removeChild(jssStyles)
      }
  },[])
  return (
      <Component {...pageProps} />
  )
}

export default MyApp
