import { Provider } from 'react-redux';
import Navigation from '@navigation/Navigation';
import store from './src/shared/state/store';

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
