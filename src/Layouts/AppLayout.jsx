import { Box } from '@mui/material'

import { Footer } from '../components/Footer'
import { Nav } from '../components/Nav'

export const AppLayout = ({ children }) => {
  return (
    <Box
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <Nav />
      <Box style={{ flex: 1 }}>{children}</Box>
      <Footer />
    </Box>
  )
}
