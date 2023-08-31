import { Card, CardActionArea, Grid } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import { Link } from 'react-router-dom'
// disableRipple
export const Product = ({ product }) => {
  const { id, image, name, price } = product
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Grid item md={3}>
      <Card
        sx={{
          minWidth: 250,
          filter: isHovered ? 'brightness(70%)' : 'none',
          textAlign: 'center',
        }}
        key={id}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardActionArea component={Link} to={id}>
          <CardMedia component="img" image={image} alt="foto del producto" />
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              p: '0',
            }}
          >
            <Typography variant="h6" component="div">
              ${price}
            </Typography>
            <Typography
              gutterBottom
              component="div"
              sx={{ textTransform: 'uppercase', fontSize: '12px' }}
            >
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
        {isHovered && (
          <Typography
            component={Link}
            to={id}
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              minWidth: '150px',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'black',
              color: '#fff',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              textDecoration: 'none',
              textTransform: 'uppercase',
            }}
          >
            Ver producto
          </Typography>
        )}
      </Card>
    </Grid>
  )
}
