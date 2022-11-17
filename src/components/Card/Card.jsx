import './Card.scss'

const Card = ({img, title}) => {
  return (
    <div className='card'>
      <img className='card__img' src={img} alt="Card background" />
      <h2 className='card__title'>{title}</h2>
      <div className="card__cover"></div>
    </div>
  )
}

export default Card
