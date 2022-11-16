import './Layout.scss';
import Welcome from '../../containers/Welcome/Welcome';

const Layout = ({children}) => {
  return (
    <div className='layout'>
      <header className='layout__header'>
        <Welcome />
      </header>
      <main className='layout__main'>
        {children}
      </main>
    </div>
  )
}

export default Layout
