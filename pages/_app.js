import App from 'next/app';
import { wrapper } from '../redux';
import { removeError } from '../redux/actions/errorActions';
// import { useDispatch } from 'react-redux';
import '../styles/globals.css';


class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    // const dispatch = useDispatch();
    ctx.store.dispatch(removeError());
    return {
      pageProps: {
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}),
      },
    };
  }

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default wrapper.withRedux(MyApp);
