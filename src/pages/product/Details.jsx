import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import {
  Alert,
  Box,
  Button,
  Chip,
  Divider,
  Grid,
  IconButton,
  Modal,
  Snackbar,
  Stack,
  Typography,
} from '@mui/material'
import Tab from '@mui/material/Tab'
import { Image } from 'mui-image'
import React, { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { Spinner } from '../../components/Spinner'
import { CartContext } from '../../context/CartContext'

export const Details = () => {
  const { id } = useParams()
  const {
    products,
    loading,
    addProductToCart,
    setQuantityValue,
    quantityValue,
    open,
    message,
    handleClose,
  } = useContext(CartContext)

  const product = products.find((product) => product.id === id)
  const [modalOpen, setModalOpen] = useState(false)
  const { name, image, flavor, size, price, description, info, imagePanel } =
    product || {}

  const countStyle = {
    border: '1px solid lightgray',
    borderRadius: '2px',
    height: '30px',
    width: '30px',
  }
  const [value, setValue] = React.useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }
  return (
    <div>
      {loading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <Spinner />
        </div>
      ) : product ? (
        <div>
          <Button sx={{ m: '5px' }} component={Link} to="/productos">
            Volver atrás
          </Button>
          <Grid
            container
            columns={{ md: 16 }}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'start',
              p: '50px',
            }}
          >
            <Grid
              item
              xs={12}
              md={9}
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: { xs: 'center', md: 'start' },
                marginBottom: { xs: '50px', md: 0 },
              }}
            >
              <Box
                sx={{
                  width: { xs: '100%', md: '40%' },
                  marginBottom: { xs: '16px', md: 0 },
                }}
              >
                <Image
                  src={image}
                  fit="scale-down"
                  showLoading={false}
                  errorIcon={true}
                  shift="bottom"
                />
              </Box>
              <Box
                sx={{
                  width: { xs: '100%', md: '40%' },
                  p: '10px 20px',
                }}
              >
                <Box sx={{ mx: 2 }}>
                  <Grid
                    container
                    alignItems="start"
                    justifyContent="center"
                    flexDirection="column"
                  >
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="h4"
                        sx={{ textTransform: 'uppercase' }}
                      >
                        {name}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        color="text.secondary"
                        sx={{
                          minWidth: '400px',
                          maxWidth: { md: '100%' },
                        }}
                      >
                        {info}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography gutterBottom variant="h5" sx={{ mt: '10px' }}>
                        $ {price}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
                <Divider variant="middle" />
                <Box sx={{ m: 2 }}>
                  <Stack direction="row" spacing={2}>
                    {flavor && <Chip label={flavor} />}
                    <Chip color="primary" label={size} />
                  </Stack>
                </Box>
                <Divider variant="middle" />

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mt: 'auto',
                  }}
                >
                  <Typography padding={2}>Cantidad:</Typography>
                  <IconButton
                    variant="contained"
                    sx={countStyle}
                    onClick={() => {
                      setQuantityValue(Math.max(1, quantityValue - 1))
                    }}
                  >
                    <RemoveIcon fontSize="small" sx={{ width: '20px' }} />
                  </IconButton>
                  <Typography
                    sx={{
                      textAlign: 'center',
                      width: '30px',
                      height: '30px',
                      fontSize: '15px',
                      border: '1px solid lightgray',
                      borderRadius: '2px',
                      lineHeight: '2',
                    }}
                  >
                    {quantityValue}
                  </Typography>

                  <IconButton
                    variant="contained"
                    sx={countStyle}
                    onClick={() => {
                      setQuantityValue(quantityValue + 1)
                    }}
                  >
                    <AddIcon fontSize="small" sx={{ width: '20px' }} />
                  </IconButton>
                </Box>

                <Box sx={{ mt: 5, ml: 1, mb: 1 }}>
                  <Button
                    onClick={() => addProductToCart(id)}
                    sx={{ backgroundColor: '#E6551C', p: '10px' }}
                  >
                    Agregar al Carrito
                  </Button>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  width: '100%',
                  typography: 'body1',
                  p: { xs: '20px', md: 0 },
                }}
              >
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList
                      onChange={handleChange}
                      aria-label="lab API tabs example"
                    >
                      <Tab label="Detalles" value="1" />
                      <Tab label="Información nutricional" value="2" />
                    </TabList>
                  </Box>
                  <TabPanel value="1">
                    <Box
                      component="div"
                      sx={{
                        pr: '5px',
                        maxHeight: { xs: '400px', md: '400px' },
                        overflowY: 'auto',
                      }}
                    >
                      {description.split('\\n').map((paragraph, index) => {
                        if (paragraph.includes('INDICACIONES')) {
                          return (
                            <Typography key={index} paragraph component="div">
                              <strong>
                                {paragraph.replace(
                                  'INDICACIONES',
                                  'INDICACIONES'
                                )}
                              </strong>
                            </Typography>
                          )
                        } else if (paragraph.includes('CARACTERISTICAS')) {
                          return (
                            <Typography key={index} paragraph component="div">
                              <strong>
                                {paragraph.replace(
                                  'CARACTERISTICAS',
                                  'CARACTERISTICAS'
                                )}
                              </strong>
                            </Typography>
                          )
                        } else {
                          return (
                            <Typography key={index} paragraph component="div">
                              {paragraph}
                            </Typography>
                          )
                        }
                      })}
                    </Box>
                  </TabPanel>

                  <TabPanel value="2">
                    <Box
                      width="60%"
                      onClick={openModal}
                      style={{ cursor: 'pointer' }}
                    >
                      <Image
                        src={imagePanel}
                        showLoading={true}
                        errorIcon={true}
                      />
                    </Box>
                  </TabPanel>

                  <Modal open={modalOpen} onClose={closeModal}>
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        outline: 'none',
                      }}
                    >
                      <Image
                        src={imagePanel}
                        showLoading={true}
                        errorIcon={true}
                      />
                    </Box>
                  </Modal>
                </TabContext>
              </Box>
              <Divider variant="middle" />
            </Grid>
          </Grid>
        </div>
      ) : (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <Typography variant="h6">No hay productos disponibles</Typography>
        </div>
      )}
      {message && (
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '20%',
          }}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{
              width: '100%',
            }}
          >
            {message}
          </Alert>
        </Snackbar>
      )}
    </div>
  )
}
