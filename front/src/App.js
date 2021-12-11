import logo from './logo.svg';
import './App.css'
import Main from './components/main';

const centerStyle={
  position: "absolute",
    left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  border: "5px solid #DEE1E3",
  padding:"10px"
};

function App() {
  return (
    <div >
      <div className='centered'>
        <Main />
        </div>
    </div>
  );
}

export default App;
