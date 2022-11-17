import { useEffect, useState } from 'react'
import ListItem from '../../components/ListItem/ListItem'
import './ListItemContainer.scss'

const ListItemContainer = ({listItems}) => {
    const [renderedItems, setRenderedItems] = useState("");

    useEffect(() => {
        renderItems()
    }, [listItems])

    const renderItems = () => {
        setRenderedItems(listItems.map((item, index) => <ListItem key={index} text={item} />))
    }

  return (
    <div className='list-item-container'>
      {renderedItems}
    </div>
  )
}

export default ListItemContainer
