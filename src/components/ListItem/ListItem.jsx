import './ListItem.scss'

const ListItem = ({text}) => {

    const deleteItem = (e) => {
        e.target.parentElement.remove();
    }

  return (
    <div className='list-item'>
      <p className='list-item__text'>{text}</p>
      <button onClick={deleteItem} className='list-item__remove'>X</button>
    </div>
  )
}

export default ListItem
