// import "./App.css";

import { Typography, Stack, TextField, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function App() {
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
                />
                <TextField
                    id="number2"
                    label="Second number"
                    variant="outlined"
                    type="number"
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
        </Stack>
    );
}

export default App;
