const Manager = (props) => {
  const { image, periodInCharge, flag, country, fname, lname, number } = props
  // console.log(props)
  console.log(number)
  return (
    <article className='manager'>
      <img src={image} alt={lname} />
      <h2>
        {fname}
        <em>{lname}</em>
      </h2>
      <h4>
        {country}
        {flag}
      </h4>
      <h5>{periodInCharge}</h5>
      <span className='number'>#{number + 1}</span>
    </article>
  )
}

export default Manager
