import React from 'react';
import { Fragment } from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';

const CustomCards = ({ cardImage, cardTitle, cardDesc, cardType, cardPrice, itemLink, baseURL }) => {
    return (
        <div className={`single_product shadow text-center ${cardType === 'Latest' ? 'p-4' : 'p-3'}`} style={{ height: "100%" }}>
            <div className="product_img">
                <Link to={`/${baseURL}`}>
                    <img
                        src={cardImage}
                        alt="Card Image"
                        className="img img-fluid rounded"
                        style={cardType === 'Latest' ? { width: '100%', height: '400px', marginBottom: '10px' } : { height: "300px" }}
                    />
                </Link>
                {
                    cardType === 'Latest' &&
                    <div className="new_product">
                        <span className="badge py-2 px-3 badge-pill badge-danger">
                            New
                        </span>
                    </div>
                }
            </div>
            <div className="product_caption my-3">
                {cardType === 'Product' && (<div className='product-rating'>
                    <Fragment>
                        {/* <i className={props.stars[0]}></i>
                            <i className={props.stars[1]}></i>
                            <i className={props.stars[2]}></i>
                            <i className={props.stars[3]}></i>
                            <i className={props.stars[4]}></i> */}
                    </Fragment>
                </div>)}
                {(cardType === 'Category' || cardType === 'Latest') && <h4>
                    <Link to={itemLink}>{cardTitle}</Link>
                </h4>}
                {cardType === 'Product' && <h5>
                    <Link to={itemLink}>{cardTitle}</Link>
                </h5>}
            </div>
            {(cardType === 'Product' || cardType === 'Latest') && <div className="price">
                <b>
                    <span className="mr-1">$</span>
                    <span>{cardPrice}</span>
                </b>
            </div>}
            {cardDesc && <div className="mt-3">
                <p>
                    {cardDesc}
                </p>
            </div>}
        </div>
    )
}

const CustomCardsMaterial = ({ cardImage, cardTitle, cardDesc, cardType, cardPrice, itemLink, baseURL }) => {
    return (
        <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <CardMedia
                component="img"
                height="140"
                image={cardImage}
                alt="green iguana"
                sx={{ borderBottom: '1px solid grey', minHeight: '280px', transform: 'scale(0.9)' }}
            />
            <CardContent sx={{height: '100%'}}>
                <Typography gutterBottom component="div" sx={{fontWeight: '600', fontSize: '1.5rem', lineHeight: '1.2'}}>
                    {cardTitle.substring(0, 28) + ((cardTitle.length > 15) ? '...' : '')}
                </Typography>
                {cardDesc && <Typography variant="body2" color="text.secondary">
                    {cardDesc}
                </Typography>}
            </CardContent>
            {cardPrice && <CardActions>
                <Link to={`/${baseURL}`}>
                    <Button size="small">Visit</Button>
                </Link>
                <Button size="small" sx={{color: 'black'}}>Price: {cardPrice}$</Button>
            </CardActions>}
        </Card>
    )
}

export default CustomCardsMaterial