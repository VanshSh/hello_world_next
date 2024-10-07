const ProductDetails = ({ params }: { params: { productId: string } }) => {
  return <h1>Details about products. Product id == {params.productId} </h1>
}

export default ProductDetails
