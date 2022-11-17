import './ListInput.scss';

const ListInput = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit} action='submit' className='list-input'>
        <input type="text" className="list-input__input" />
        <button className='list-input__submit'>Create</button>
    </form>
  )
}

export default ListInput
