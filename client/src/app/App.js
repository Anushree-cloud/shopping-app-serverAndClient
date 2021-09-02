import Router from '../routes/Router';
import { AuthContextProvider } from '../context'
import './App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js'

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <Router />
      </div>
    </AuthContextProvider>
  );
}

export default App;
