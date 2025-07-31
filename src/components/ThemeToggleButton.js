import { SunIcon, MoonIcon } from 'lucide-react';
//import "../styles/toggleButton.css";
import "../styles/button2.css";
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from "../features/themes/themeSlice"

function ThemeToggleBttn() {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.products.array);
    return (
      // <div className ="buttonWrapper">
      //   {/* <div className ="inputToHide"> */}
      //   <input 
      //   type = "checkbox" id = "mode-toggle"
      //   onChange = { () => { dispatch(toggleTheme(theme))} }/>
      //  {/* </div>
      //   <label for="mode-toggle" className="toggle-label"> */}

      //   <label class="switch">
      //       <input type="checkbox"
      //        onChange = { () => { dispatch(toggleTheme(theme))} }
      //        SunIcon MoonIcon/>
      //       <span class="slider round"></span>
      //     </label>

      //   <SunIcon className="sun" />
      //   <MoonIcon className="moon" />
      // {/* </label> */}
      // </div>

        <div className="buttonWrapper">
      <label className="switch">
        <input type="checkbox" onChange={ () => { dispatch(toggleTheme(theme))}} />
        <span className="slider">
          <SunIcon className="icon sun" />
          <MoonIcon className="icon moon" />
        </span>
      </label>
    </div>
    );
};

// function ThemeToggleBttn() {
//     const dispatch = useDispatch();
//     const theme = useSelector((state) => state.products.array);
//     return (
//       <div className ="buttonWrapper">
//         {/* <div className ="inputToHide"> */}
//         <input 
//         type = "checkbox" id = "mode-toggle"
//         onChange = { () => { dispatch(toggleTheme(theme))} }/>
//         {/* </div> */}
//         <label for="mode-toggle" className="toggle-label">
//         <SunIcon className="sun" />
//         <MoonIcon className="moon" />
//       </label>
//       </div>
//     );
// };



// function ThemeToggleBttn() {
//     const dispatch = useDispatch();
//     const theme = useSelector((state) => state.products.array);
//     return (
//       <div className ="buttonWrapper">
//         <input 
//         type = "checkbox" id = "mode-toggle"
//         onChange = { () => { dispatch(toggleTheme(theme))} }
//         className = "inputToHide"/>
//         <label for="mode-toggle" className="toggle-label">
//         <SunIcon className="sun" />
//         <MoonIcon className="moon" />
//       </label>
//       </div>
//     );
// };

export default ThemeToggleBttn;