import "./Header.scss";

const Header = ({ text }) => {
  return (
    <div className="header">
      <h1 className="header__title">{text}</h1>
    </div>  
  )
};

export default Header;
