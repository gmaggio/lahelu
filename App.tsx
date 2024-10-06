import { Provider } from 'react-redux';
import RouteWrapper from 'src/routes/RouteWrapper';
import { StatusBar } from 'expo-status-bar';
import store from './src/shared/state/store';

export default function App() {
  return (
    <Provider store={store}>
      <RouteWrapper />
      <StatusBar />
    </Provider>
  );
}
