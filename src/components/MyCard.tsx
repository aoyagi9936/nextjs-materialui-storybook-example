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

const Props = {
    minWidth: PropTypes.number,
    path: PropTypes.string,
    title: PropTypes.string.isRequired,
}

const MyCard = (props: InferProps<typeof Props>) => {
    return (
        <Card sx={{ minWidth: props.minWidth }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {props.title}
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
                    component={NextLinkComposed}
                    to={{
                        pathname: props.path
                    }}
                >Learn More</Button>
            </CardActions>
        </Card>
    );
}

MyCard.propTypes = Props

MyCard.defaultProps = {
    minWidth: 275,
    path: '/',
}

export default MyCard
