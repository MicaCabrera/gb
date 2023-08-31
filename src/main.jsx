import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
// import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import { CartProvider } from './context/CartContext.jsx'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0A0000', //negro
      light: '#FFFDFD', //blanco
    },
    secondary: {
      main: '#A7333F', //gris
      light: '#767B91', //rojo
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CartProvider>
        <CssBaseline />
        <App />
      </CartProvider>
    </ThemeProvider>
  </BrowserRouter>
)
