import '../styles/globals.css';
import { wrapper } from '../redux/app/store';

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(App);
