import { Container, Grid } from '@mui/material'
import { useEffect, useState } from 'react'

import { Spinner } from '../../components/Spinner'
import { getAllProducts } from '../../services/products'
import { Filters } from './Filters'
import { Product } from './Product'

export const ProductList = () => {
  const [allProducts, setAllProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const products = await getAllProducts()
        setAllProducts(products)
        setLoading(false)
      } catch (error) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    getData()
  }, [])

  return (
    <Container>
      <Container sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
        <Filters />
      </Container>

      <Grid
        container
        spacing={2}
        sx={{
          p: 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {loading && <Spinner />}
        {error && <p>Error</p>}
        {allProducts.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
        {!allProducts.length && !loading && <p>No hay productos que mostrar</p>}
      </Grid>
    </Container>
  )
}
