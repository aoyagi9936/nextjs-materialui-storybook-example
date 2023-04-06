import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import PropTypes, { InferProps } from 'prop-types';
import { NextLinkComposed } from './Link';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function MyCard({ title, minWidth, path, color }: InferProps<typeof MyCard.propTypes>) {
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

MyCard.propTypes = {
    title: PropTypes.string.isRequired,
    minWidth: PropTypes.number,
    path: PropTypes.string,
    color: PropTypes.oneOf(['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning'] as const).isRequired,

}

MyCard.defaultProps = {
    minWidth: 275,
    path: '/',
    buttonColor: 'primary',
}
