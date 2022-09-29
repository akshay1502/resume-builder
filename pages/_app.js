import '../styles/globals.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import resumeReducer from '../reducers/resumeReducer';

const store = createStore(resumeReducer, composeWithDevTools())
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp
