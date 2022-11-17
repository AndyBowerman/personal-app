import { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import ListInput from '../../components/ListInput/ListInput'
import ListItemContainer from '../../containers/ListItemContainer/ListItemContainer'
import './ToDoList.scss'

const ToDoList = () => {
    const [inputItems, setInputItems] = useState([]);
    
    const getInputValue = (e) => {
        e.preventDefault();
        setInputItems([...inputItems, e.target.firstChild.value]);
        e.target.firstChild.value = "";
    }

  return (
    <Layout>
        <div className="to-do-list">
            <ListInput handleSubmit={getInputValue} />
            <ListItemContainer listItems={inputItems} />
        </div>
        
    </Layout>
  )
}

export default ToDoList
