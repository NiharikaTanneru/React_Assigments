
import './App.css';

import HeaderComponent from './Components/HeaderComponent';
import NavComponent from './Components/NavComponent';
import CenterComponent from './Components/CenterComponent';
import FooterComponent from './Components/FooterComponent';



function App() {

  const nav=["Home","Menu1","Menu2","Menu3","Menu4"];
  const list_arr=['Item-1','Item-2','Item-3','Item-4'];

  return (
    <div className="App">   
   
  <HeaderComponent name="Employee Management System"></HeaderComponent>
  <NavComponent navelements={nav}></NavComponent>
  <CenterComponent name="Content Header" contentlist={list_arr} listname='list-Header'></CenterComponent>
  <FooterComponent name="copyright dialog"></FooterComponent>

    </div>
  );
}

export default App;
