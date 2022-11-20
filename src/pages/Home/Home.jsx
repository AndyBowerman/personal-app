import Card from '../../components/Card/Card';
import Layout from '../../components/Layout/Layout';
import Weather from '../../containers/Weather/Weather';
import { Link } from 'react-router-dom';
import './Home.scss';

import toDoList from "../../assets/to-do-list.jpg";
import traffic from "../../assets/traffic.jpg";

const Home = () => {
  return (
    <Layout>
        <Weather />
        <Link to="/todolist" className='home__link'>
          <Card img={toDoList} title="Your To Do List" />
        </Link>
    </Layout>
  )
}

export default Home
