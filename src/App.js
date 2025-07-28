import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import ProductsPage from './pages/ProductsPage';
import CartsPage from './pages/TasksPage';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import './styles/vertical-nav-bar.css';
import ThemeToggleBttn from "./components/ThemeToggleButton";

function App() {
  const theme = useSelector((state) => state.themes.theme);
  // const themeMode = useSelector((state) => state.themes.mode);
  // const dispatch = useDispatch();
 // const themeState = useSelector((state) => state.themes);

  return (
     <div className="container">
      {/* Navigation Bar */}
       <ThemeProvider theme={theme}>
        <CssBaseline /> 
      <nav className = "vertical-nav">
        <Link to="/" className= "textInNav">Dashboard</Link>
        <Link to="/products" className= "textInNav">Products</Link>
        <Link to="/carts" className= "textInNav">Carts</Link>
      
      {/* Why not: <button onClick={dispatch(toggleTheme())}>...</button>
      that way, toggleTheme() is called immediately during render.
      onClick={...} expects a function that it can call later — when the user clicks the button. */}
    {/* <button onClick = {() => dispatch(toggleTheme())}>Switch to {themeMode === 'Dark' ? 'Dark' : 'Light'} Theme</button>  */}
   
    <ThemeToggleBttn />
               
    </nav>
        {/* Route Configuration */}
        <main className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/carts" element={<CartsPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
        </main>
    </ThemeProvider> 
    </div>
  );
}

export default App;
