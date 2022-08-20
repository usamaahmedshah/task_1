import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeScreen from './screens/HomeScreen';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <HomeScreen />

        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
