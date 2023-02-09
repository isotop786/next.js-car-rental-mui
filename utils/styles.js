import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    navbar: {
        // backgroundColor:"#555",
        marginBottom:20,
        '& a':{
            color:"#fff",
            marginLeft:10,
        },
    },
    main:{
        minHeight:"80vh",
    },
    footerStyle:{
        marginTop:"3rem",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    brand:{
        fontWeight:"bold",
    },
    grow:{
        flexGrow:1
    },
    subNav:{
        display:"flex",
        flexDirection:"row",
    },
    productNotFound:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    centerContent:{
        display:"flex",
        justifyContent:'center',
        alignItems:'center',
        position:'relative',
        top:50,
        marginTop:'1rem'
    }
})

export default useStyles;