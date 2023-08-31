import { Container } from '@mui/material'
import LinearProgress from '@mui/material/LinearProgress'
import Stack from '@mui/material/Stack'

export const Spinner = () => {
  return (
    <Container
      sx={{
        height: '50vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Stack sx={{ width: '50%', color: 'grey.500' }} spacing={2}>
        <LinearProgress color="primary" />
      </Stack>
    </Container>
  )
}
