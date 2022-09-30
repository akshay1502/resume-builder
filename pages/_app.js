import '../styles/globals.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';
import { useEffect } from 'react';
import { getDataFromLocalStorage } from '../actions/resumeActions';

export const store = createStore(rootReducer, composeWithDevTools())
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    store.dispatch(getDataFromLocalStorage());
  }, []);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp
