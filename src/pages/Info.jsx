import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material'

export const Info = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: "url('images/o.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '80vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            mb={4}
            color="white"
            fontWeight="bold"
            fontFamily="Bruno Ace"
            textAlign="center"
          >
            Nosotros
          </Typography>
        </Container>
      </Box>

      <Container
        maxWidth="full"
        sx={{
          backgroundColor: 'black',
          height: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            pt: '150px',
            pb: '150px',
          }}
        >
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontSize: 40,
              fontFamily: 'Titillium Web',
              textAlign: 'center',
              color: 'white',
            }}
          >
            Somos tu aliado para alcanzar el máximo rendimiento deportivo.
            <br /> Estamos dedicados a impulsar tu desempeño y ayudarte a
            superar tus metas.
            <br />
            Con GB descubrí tu verdadero potencial.
          </Typography>
        </Box>
      </Container>

      <Container
        maxWidth="full"
        sx={{
          padding: '100px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: '80%',
          }}
          xs={12}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h1"
                color="#D42A28"
                fontWeight="bold"
                fontFamily="Bruno Ace"
                textAlign={{ xs: 'center' }}
              >
                Con
                <br />
                tac
                <br />
                to
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="form"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems={{ xs: 'center', md: 'flex-start' }}
                sx={{ gap: 2 }}
              >
                <TextField
                  label="Nombre"
                  fullWidth
                  variant="standard"
                  required
                />
                <TextField
                  label="Apellido"
                  fullWidth
                  variant="standard"
                  required
                />
                <TextField
                  label="Correo Electrónico"
                  fullWidth
                  variant="standard"
                  required
                  type="email"
                />
                <TextField
                  label="Consulta"
                  fullWidth
                  variant="outlined"
                  multiline
                  rows={4}
                  required
                />

                <Box>
                  <Button
                    type="submit"
                    sx={{
                      backgroundColor: 'black',
                      color: 'white',
                      borderRadius: 0,
                      p: '10px 20px',

                      '&:hover': {
                        backgroundColor: 'grey',
                      },
                    }}
                  >
                    ENVIAR
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  )
}
