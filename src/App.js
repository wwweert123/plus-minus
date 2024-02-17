// import "./App.css";

import { Typography, Stack, TextField, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";

import axios from "./api/axios";

const ADD_ENPOINT = "/plus-minus/add";
const SUBTRACT_ENDPOINT = "/plus-minus/subtract";

function App() {
    const [number1, setNumber1] = useState();
    const [number2, setNumber2] = useState();

    const [result, setResult] = useState();

    const SubmitAdd = async () => {
        const params = new URLSearchParams({
            number1: number1,
            number2: number2,
        });
        try {
            const response = await axios.post(ADD_ENPOINT, params, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            });
            const result = response?.data?.answer;
            if (!isNaN(result)) {
                setResult(result);
            } else {
                alert("non-number received from backend");
            }
        } catch (err) {
            console.log(err);
            if (!err?.response) {
                alert("No Server Response");
            } else if (err.response?.status === 400) {
                alert(
                    "Incorrect parameters sent: " + err.response?.data?.message
                );
            } else if (err.response?.status === 404) {
                alert("API endpoint not found");
            } else {
                alert("Unexpected error");
            }
        }
    };

    const SubmitSubtract = async () => {
        const params = new URLSearchParams({
            number1: number1,
            number2: number2,
        });
        try {
            const response = await axios.post(SUBTRACT_ENDPOINT, params, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            });
            const result = response?.data?.answer;
            if (!isNaN(result)) {
                setResult(result);
            }
        } catch (err) {
            console.log(err);
            if (!err?.response) {
                console.log("No Server Response");
            } else if (err.response?.status === 400) {
                console.log("Incorrect parameters sent");
            } else {
                console.log("Unexpected error");
            }
        }
    };

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
                <Button
                    variant="contained"
                    endIcon={<AddIcon />}
                    onClick={SubmitAdd}
                >
                    Add
                </Button>
                <Button
                    variant="contained"
                    color="warning"
                    endIcon={<RemoveIcon />}
                    onClick={SubmitSubtract}
                >
                    Subtract
                </Button>
            </Stack>
            <Typography variant="h5">Calculated Result: {result}</Typography>
        </Stack>
    );
}

export default App;
