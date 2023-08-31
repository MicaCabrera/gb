import { Typography } from '@mui/material'

const footerStyles = {
  backgroundColor: 'black',
  color: '#fff',
  padding: '16px',
  textAlign: 'center',
}

export const Footer = () => {
  return (
    <footer style={footerStyles}>
      <Typography color="white">
        © 2023 GB suplementos deportivos | Colón - Entre Ríos | Argentina
      </Typography>
    </footer>
  )
}
