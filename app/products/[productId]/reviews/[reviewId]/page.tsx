import { notFound } from 'next/navigation'

const Reviews = ({
  params,
}: {
  params: { reviewId: string; productId: string }
}) => {
  if (parseInt(params?.reviewId) > 50) {
    notFound()
  }
  return (
    <h1>
      Review for product with productId {params.productId} and review number{' '}
      {params.reviewId}{' '}
    </h1>
  )
}

export default Reviews
