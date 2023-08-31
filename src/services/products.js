import { collection, getDocs } from 'firebase/firestore'

import { db } from '../firebase/config'

//Arreglo de productos
export const getAllProducts = async () => {
  let products = []
  const querySnapshot = await getDocs(collection(db, 'products'))
  querySnapshot.forEach((doc) => {
    // console.log(doc.data(), doc.id)
    products.push({ ...doc.data(), id: doc.id })
  })
  // console.log(products)
  return products
}
