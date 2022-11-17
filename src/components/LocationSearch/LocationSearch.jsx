import './LocationSearch.scss';

const LocationSearch = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit} action='submit' className='location-search'>
      <input className='location-search__input' type="text" />
      <button className='location-search__submit'>Search</button>
    </form>
  )
}

export default LocationSearch
