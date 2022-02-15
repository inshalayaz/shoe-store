import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';

const ProductCard = ({ img, brand, title }) => {
  return (
    <Card sx={{ maxWidth: 345, minHeight: 345 }}>
      <CardActionArea>
        <CardMedia component="img" src={img} alt={title} />
        <CardContent>
          <Typography variant="caption">{brand}</Typography>
          <Typography variant="body1">{title}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
