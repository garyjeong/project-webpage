import React from 'react';
import { Box, Container, Stack, TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { Face } from '@mui/icons-material';


export default function SignIn() {
    const [loading, setLoading] = React.useState(false);
    
    function handleClick() {
        setLoading(true);
    }

    return (
        <div id="box">
            <Box
                sx={{
                    width: '100%',
                    maxWidth: '100%',
                    marginTop: '200px'
                }}
            >
                <Container maxWidth="sm">
                    <Stack spacing={1}>
                        <TextField
                            fullWidth
                            id="email"
                            label="이메일"
                            type="search"
                            variant="standard"
                        />
                        <TextField
                            fullWidth
                            id="password"
                            label="비밀번호"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                        />
                        <LoadingButton
                            color="primary"
                            onClick={handleClick}
                            loading={loading}
                            loadingPosition="center"
                            endIcon={<Face />}
                            variant="contained"
                        >
                            LOGIN
                        </LoadingButton>
                    </Stack>
                </Container>
            </Box>
        </div>
    );
}