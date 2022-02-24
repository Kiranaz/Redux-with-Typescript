import { Provider } from "react-redux";
import  store from "./redux/store";
import { RepositoriesList } from './RepositoriesList';
function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Search for NPM Packages</h1>
      </div>
      <RepositoriesList />
    </Provider>
  );
}

export default App;
