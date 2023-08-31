import InstagramIcon from '@mui/icons-material/Instagram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { Box, Grid, IconButton, useMediaQuery, useTheme } from '@mui/material'

export const Home = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box
      sx={{
        backgroundColor: '#000000',
        position: 'relative',
        width: '100%',
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <video
        src="/images/videohome.mp4"
        autoPlay
        loop
        muted
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />

      <Grid
        container
        justifyContent="end"
        alignItems="center"
        sx={{
          position: 'absolute',
          top: isMobile ? '50%' : '80%',
          left: isMobile ? '55%' : '70%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
          width: isMobile ? '90%' : '60%',
        }}
      >
        <Grid item xs={12} sm={5}>
          <img
            src="/images/slogan-01.png"
            alt="Logo"
            style={{
              width: '90%',
            }}
          />
        </Grid>
      </Grid>

      <Box
        sx={{
          borderRadius: '5%',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          position: 'absolute',
          top: '45%',
          left: '0',
          transform: 'translateY(-50%)',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '@media (max-width: 600px)': {
            display: 'none',
          },
        }}
      >
        <IconButton
          sx={{
            borderRadius: '0',
            mb: 2,
            color: '#eeeeee',
            backgroundColor: 'transparent',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              color: 'gray',
            },
          }}
          onClick={() => {
            // Acción al hacer clic en el icono de Facebook
          }}
        >
          <WhatsAppIcon sx={{ fontSize: '2rem' }} />
        </IconButton>

        <IconButton
          sx={{
            borderRadius: '0',
            color: '#eeeeee',
            backgroundColor: 'transparent',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              color: 'gray',
            },
          }}
          onClick={() => {
            // Acción al hacer clic en el icono de Instagram
          }}
        >
          <InstagramIcon sx={{ fontSize: '2rem' }} />
        </IconButton>
      </Box>
    </Box>
  )
}
