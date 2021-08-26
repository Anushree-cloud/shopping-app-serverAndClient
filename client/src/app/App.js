import { ProductContextProvider } from '../context/product';
import Router from '../routes/Router';
import './App.css';

function App() {
  return (
    <ProductContextProvider>
      <div className="App">
        <Router />
      </div>
    </ProductContextProvider>
  );
}

export default App;
