import Head from './Head/';
import Navbar from './Navbar';
import ErrorMessage from './ErrorMessage';
// import bg from '../../public/img/photo_2022-11-30_11-59-48.jpg'

const Layout = ({ children, title }) => {

  return (
    <div 
    // style={{
    //   backgroundImage: `url(${bg.src})`,
    //   width: '100%',
    //   height: '100%',
    // }}
    >
      <Head title={title} />
      <Navbar />
      <ErrorMessage />
      <div className="has-text-centered">{children}</div>
    </div>
  );
};

export default Layout;
