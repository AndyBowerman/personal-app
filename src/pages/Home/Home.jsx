import Card from '../../components/Card/Card';
import Layout from '../../components/Layout/Layout';
import Weather from '../../containers/Weather/Weather';
import './Home.scss';

import toDoList from "../../assets/to-do-list.jpg";
import traffic from "../../assets/traffic.jpg";

const Home = () => {
  return (
    <Layout>
        <Weather />
        <Card img={toDoList} title="Your To Do List" />
        <Card img={traffic} title="See Traffic"/>
    </Layout>
  )
}

export default Home
