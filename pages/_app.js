import '../styles/globals.css';
import { wrapper } from '../redux/app/store';
import Layout from '@layout/Layout';

import { ChakraProvider } from '@chakra-ui/react'
const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(App);
