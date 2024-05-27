import { FormControl, MenuItem, Select } from '@mui/material'
import { useContext, useEffect, useState } from 'react'

import { CartContext } from '../../context/CartContext'

export const Filters = ({ onFilter }) => {
  const { products } = useContext(CartContext)
  const [productsType, setProductsType] = useState('')

  useEffect(() => {
    const filteredProducts = products.filter((product) => {
      return productsType === '' || product.type === productsType
    })

    onFilter(filteredProducts)
  }, [productsType, products, onFilter])

  const handleChange = (event) => {
    setProductsType(event.target.value)
  }

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 300 }}>
        <Select
          value={productsType}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          size="small"
        >
          <MenuItem value="">
            <em>Tipo de producto</em>
          </MenuItem>
          <MenuItem value={'aminoacidos'}>Aminoácidos</MenuItem>
          <MenuItem value={'barritas proteicas'}>Barritas proteicas</MenuItem>
          <MenuItem value={'bcaa'}>BCAA</MenuItem>
          <MenuItem value={'colágeno'}>Colágeno</MenuItem>
          <MenuItem value={'pre-entreno'}>Pre-entreno</MenuItem>
          <MenuItem value={'creatina'}>Creatína</MenuItem>
          <MenuItem value={'ganador de peso'}>Ganador de peso</MenuItem>
          <MenuItem value={'proteína'}>Proteína</MenuItem>
          <MenuItem value={'Proteína vegana'}>Proteína vegana</MenuItem>
          <MenuItem value={'quemador de grasa'}>Quemador de grasa</MenuItem>
          <MenuItem value={'shakers'}>Shakers</MenuItem>
          <MenuItem value={'multivitamínico'}>Multivitamínico</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}
