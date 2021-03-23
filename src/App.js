import './App.css';
import StandardForm from './standardForm/standardForm';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6 border py-3">
            <StandardForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
