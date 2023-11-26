import './App.css';
import Dali from './Components/Dali';

function App() {
  var name = "Fourat"
  var old = 8
  var pays = ['Tunis','Talia','Lafranc']
  var gomycode ={
    student :'Amine',
    track :'FullStack',
    address : {
      city : 'Lac',
      cp : 1122
    }
    
  }
  var a = "Haw hne"
  const hello=()=> alert('Haw jé')
  const helloName=(a)=>alert(`Hello ${a}`)

  var b = false
  return (
    <div>
      <h1>Workshop Props</h1>
      <Dali name={name} old={old} pays={pays} gomycode={gomycode} a={a} hello={hello} helloName={helloName} b={b}>
        <h1>Hrigua</h1>
        <h2>GOMYCODE</h2>
        <h3>16</h3>
      </Dali>
    </div>
  );
}

export default App;
