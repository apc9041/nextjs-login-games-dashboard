import Head from './Head/';
import Navbar from './Navbar';
import ErrorMessage from './ErrorMessage';
import img from '../../public/img/creepyguy.png'

const Layout = ({ children, title }) => {
  return (
    <div style={{ 
      // backgroundImage: `url("https://via.placeholder.com/500")` 
      backgroundImage: `url('${img}')` 
    }}>
    {/* <div style={{ 
      backgroundColor: `gray` 
    }}> */}
      <Head title={title} />
      <Navbar />
      <ErrorMessage />
      <div className="has-text-centered">{children}</div>
    </div>
  );
};

export default Layout;
