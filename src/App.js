import './App.css';
import PaymentInfo from './Components/PaymentInfo/PaymentInfo.jsx';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BillingForm from './Components/Billing/BIllingForm';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/' element={<PaymentInfo/>}/>
          <Route path='billing' element={<BillingForm/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
