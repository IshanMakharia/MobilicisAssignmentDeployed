import "./home.css";
import Topbar from "../components/Topbar";
// import VirtuosoTable from "../components/VirtuosoTable";
import DataTable from "../components/DataTable";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ButtonGroup } from "@mui/material";

const theme = createTheme({
    palette: {
      neutral: {
        main: '#000',
        contrastText: '#fff',
      },
    },
});

export default function Home() {

    const [rows, setRows] = useState([]);
    const [headers, setHeaders] = useState([]);
    const [queryNum, setQueryNum] = useState(["all"]);


    useEffect(()=>{
        const getAll = async ()=>{
            try {
                const data = await axios.get("/data/"+queryNum);
                // console.log(data.data[0]);
                setRows(data.data);
                const key = Object.keys(data.data[0]);
                const filteredKeys = key.filter(key =>  key!=='createdAt' && key!=='updatedAt'	&& key!=='__v');
                // console.log(filteredKeys);
                setHeaders(filteredKeys);
            } catch(err) {
                console.log(err);
            }
        }
        getAll();
    }, [queryNum]);


    return (
        <>
            <Topbar setQueryNum={setQueryNum}/>
            <div className="homeContainer">
                <div className="options">
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            '& > *': {
                                m: 1,
                            },
                        }}
                    >
                    <ThemeProvider theme={theme}>
                    <ButtonGroup variant="outlined" color="neutral" aria-label="outlined button group">
                        <Button value="query1" onClick={(e)=>setQueryNum(e.target.value)}>Query_1</Button>
                        <Button value="query2" onClick={(e)=>setQueryNum(e.target.value)}>Query_2</Button>
                        <Button value="query3" onClick={(e)=>setQueryNum(e.target.value)}>Query_3</Button>
                        <Button value="query4" onClick={(e)=>setQueryNum(e.target.value)}>Query_4</Button>
                        <Button value="query5" onClick={(e)=>setQueryNum(e.target.value)}>Query_5</Button>
                    </ButtonGroup>
                    </ThemeProvider>
                    </Box>
                </div>
                <DataTable rows={rows} headers={headers}/>
            </div>
        </>
    )
}