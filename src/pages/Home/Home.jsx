import Layout from '../../components/Layout/Layout';
import Weather from '../../containers/Weather/Weather';
import './Home.scss';

const Home = () => {
  return (
    <Layout>
        <Weather />
    </Layout>
  )
}

export default Home
