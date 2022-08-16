import './App.css';
import {useState} from 'react'
import MyForm from './components/MyForm';
import H2 from './components/H2';

  const initialState = {
    name: {
      value:'',
      error:null
    },
    email: {
      value:'',
      error:null
    },
    password: {
      value:'',
      error:null
    },
    submitted: false
  }

function App() {

  const [state, setState] = useState(initialState)
  const [error, setError] = useState(false)

  return (
    <>
      <main>
        <h1>Register</h1>
        {!state.submitted ?
          <MyForm state={state} setState={setState} error={error} setError={setError} />
          :
          <H2 text={`Hi ${state.name.value}`} />
        }
      </main>
    </>
  
  );
}

export default App;
