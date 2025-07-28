import { SunIcon, MoonIcon } from 'lucide-react';
import "../styles/toggleButton.css";
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../features/themes/themeSlice';

function ThemeToggleBttn() {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.products.array);
    return (
      <div className ="buttonWrapper">
        <input type = "checkbox" id = "mode-toggle" onChange = { () => { dispatch(toggleTheme(theme))} }/>
        <label for="mode-toggle" className="toggle-label">
        <SunIcon className="sun" />
        <MoonIcon className="moon" />
      </label>
      </div>
    );
};

export default ThemeToggleBttn;