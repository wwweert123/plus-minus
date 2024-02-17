// import "./App.css";

import { Typography, Stack, TextField, Button } from "@mui/material";

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
                />
                <TextField
                    id="number2"
                    label="Second number"
                    variant="outlined"
                />
            </Stack>

            <Stack spacing={2} direction="row">
                <Button variant="contained">Add</Button>
                <Button variant="contained">Subtract</Button>
            </Stack>
        </Stack>
    );
}

export default App;
