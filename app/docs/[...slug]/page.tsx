const Docs = ({ params }: { params: { slug: [string] } }) => {
  console.log('😇 L-2 in page.tsx=> ', params)
  return (
    <div>
      Docs page with {params.slug[0]} for {params.slug[1]}
    </div>
  )
}

export default Docs
