import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { NextLinkComposed } from './Link';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

interface MyCardProps {
    title: string,
    minWidth?: number,
    path?: string,
    color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
}

export default function MyCard({ title, minWidth = 275, path = '/', color = 'primary' }: MyCardProps) {
    return (
        <Card sx={{ minWidth: minWidth }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="h5" component="div">
                    be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                </Typography>
                <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"
                    color={color}
                    component={NextLinkComposed}
                    to={{
                        pathname: path
                    }}
                >Learn More</Button>
            </CardActions>
        </Card>
    );
}
