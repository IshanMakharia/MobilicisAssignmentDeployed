
import "./topbar.css"
import {Link} from "react-router-dom"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';


const theme = createTheme({
    palette: {
      neutral: {
        main: '#e3f2fd',
        contrastText: '#fff',
      },
    },
});

function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
}


export default function Topbar({setQueryNum}) {

    const handleClick = ()=>{
        setQueryNum("all")
    }
    return (
        <div className="topbarContainer">
                <div>

                <Link to="/" style={{textDecoration:"none"}}>
                    <ThemeProvider theme={theme}>
                    <Box sx={{'& > :not(style)': {m: 2,},}}>
                        <HomeIcon color="neutral" fontSize="large"/>
                    </Box>
                    </ThemeProvider>
                </Link>  
                </div>
            
            <div className="topbarLeft">
                    <span className="logo">Assignment</span>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                <ThemeProvider theme={theme}>
                    <Stack spacing={2} direction="row">
                        <Button variant="outlined" color="neutral" onClick={handleClick}>Fetch All Data</Button>
                    </Stack>
                </ThemeProvider>
                </div>
            </div>
        </div>
    )
}

