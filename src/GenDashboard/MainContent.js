import React from 'react'
import { Box, Stack } from '@mui/system';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';

const MainContent = () => {
    return (
        <Box>
            <Stack>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent='space-between'>
                    <Card sx={{ width: '100%' }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: 'green' }} aria-label="products">
                                    P
                                </Avatar>
                            }
                            title="Product Count"
                            subheader="20 Items"
                        />
                    </Card>
                    <Card sx={{ width: '100%' }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: 'royalblue' }} aria-label="categories">
                                    C
                                </Avatar>
                            }
                            title="Category Count"
                            subheader="5 Categories"
                        />
                    </Card>
                    <Card sx={{ width: '100%' }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: 'purple' }} aria-label="customers">
                                    N
                                </Avatar>
                            }
                            title="Number of Customers"
                            subheader="500 Customers"
                        />
                    </Card>
                    <Card sx={{ width: '100%' }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: 'orange' }} aria-label="customers">
                                    G
                                </Avatar>
                            }
                            title="Growth Rate"
                            subheader="105%"
                        />
                    </Card>
                </Stack>
            </Stack>
        </Box>
    )
}

export default MainContent