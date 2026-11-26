import './App.css'
import EmployeeCard from'./EmployeeCard.jsx'
function App() {
  return (
    <>
      <h1>Employee Card</h1>
      <EmployeeCard  name="Meharuba" designation="Python" salary={35000}/> 
      <EmployeeCard  name="Ashik" designation="Python" salary={35000}/> 
      <EmployeeCard  name="Abhirami" designation="Mern" salary={35000}/> 
    </>
  )
}

export default App
