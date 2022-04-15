import 'bootstrap/dist/css/bootstrap.min.css';
import TopMenuComponent from "./components/Ui/TopMenuComponent";

import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import SelectCoinComponent from './components/wallet/SelecCoinComponent';

function App() {
  return (
    <>
      <TopMenuComponent/>
      <SelectCoinComponent />
      
    </>
  );
}

export default App;
