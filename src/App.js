// import "./App.css";

import { Typography, Stack, TextField, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";

function App() {
    const [number1, setNumber1] = useState();
    const [number2, setNumber2] = useState();

    const [result, setResult] = useState();

    return (
        <Stack
            spacing={5}
            justifyContent="center"
            alignItems="center"
            display="flex"
            mt={2}
        >
            <Typography variant="h2">Plus and Minus</Typography>
            <Stack spacing={2} direction="row">
                <TextField
                    id="number1"
                    label="First number"
                    variant="outlined"
                    type="number"
                    value={number1}
                    onChange={(e) => setNumber1(e.target.value)}
                />
                <TextField
                    id="number2"
                    label="Second number"
                    variant="outlined"
                    type="number"
                    value={number2}
                    onChange={(e) => setNumber2(e.target.value)}
                />
            </Stack>

            <Stack spacing={2} direction="row">
                <Button variant="contained" endIcon={<AddIcon />}>
                    Add
                </Button>
                <Button
                    variant="contained"
                    color="warning"
                    endIcon={<RemoveIcon />}
                >
                    Subtract
                </Button>
            </Stack>
            <Typography variant="h5">Calculated Result: {result}</Typography>
        </Stack>
    );
}

export default App;
