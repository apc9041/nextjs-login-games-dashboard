import verifyToken from '../getInitialProps/verifyToken';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../components/Layout/';
import Dashboard from '../components/Dashboard/';
import Router from 'next/router';

const Index = () => { 
  const isAuthenticated = useSelector(state => !!state.authentication.token);
  console.log('isAuthenticated', isAuthenticated)
  
  useEffect(() => {
    if (isAuthenticated !== true) {
      console.log("don't have token");
      Router.push('/login');
    } else {
      console.log("have token");
    }
    console.log("load game");
}, []);
  
  return(
    <div style={{ 
      backgroundColor: `black` 
    }}>
  <Layout title="Home">
    <Dashboard />
  </Layout>
  </div>
  ) 
}

Index.getInitialProps = function (ctx) {
  verifyToken(ctx);
};

export default Index;
