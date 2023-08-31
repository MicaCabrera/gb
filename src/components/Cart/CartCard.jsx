import AddIcon from '@mui/icons-material/Add'
import ClearSharpIcon from '@mui/icons-material/ClearSharp'
import RemoveIcon from '@mui/icons-material/Remove'
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material'
import { useContext } from 'react'

import { CartContext } from '../../context/CartContext'

export const CartCard = ({ product }) => {
  const { id, name, image, price, info, quantityValue } = product
  const { removeProduct, handleRemoveProductCart, handleAddProductCart } =
    useContext(CartContext)

  const handleDelete = () => {
    removeProduct(id)
  }
  return (
    <>
      <Card
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 2,
          p: '5px',
        }}
      >
        <CardMedia
          component="img"
          src={image}
          alt="Nombre del producto"
          sx={{
            maxWidth: '20%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <CardContent
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography component="div" sx={{ fontWeight: 'bold' }}>
              {name}
            </Typography>
            <IconButton
              onClick={handleDelete}
              edge="end"
              color="inherit"
              aria-label="delete"
            >
              <ClearSharpIcon />
            </IconButton>
          </Box>
          <Typography variant="subtitle1" color="text.secondary">
            {info}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mt: 'auto',
            }}
          >
            <IconButton
              variant="outlined"
              size="small"
              onClick={() => {
                handleAddProductCart(product)
              }}
            >
              <AddIcon />
            </IconButton>
            <Typography p={2} variant="body1">
              {quantityValue}
            </Typography>
            <IconButton
              variant="outlined"
              size="small"
              onClick={() => {
                handleRemoveProductCart(product)
              }}
            >
              <RemoveIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography> Total: </Typography>
            <Box> ${price} </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  )
}
