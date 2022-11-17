import './Layout.scss';
import Welcome from '../../containers/Welcome/Welcome';
import Navbar from '../Navbar/Navbar';

const Layout = ({children}) => {
  return (
    <div className='layout'>
      <header className='layout__header'>
        <Welcome />
      </header>
      <nav className="layout__nav">
        <Navbar />
      </nav>
      <main className='layout__main'>
        {children}
      </main>
    </div>
  )
}

export default Layout
