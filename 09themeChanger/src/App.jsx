import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./Contexts/Theme";
import ThemeButton from "./components/ThemeButton";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lighttheme = () => {
    setThemeMode("light");
  };

  const darktheme = () => {
    setThemeMode("dark");
  };

  // Actual Theme Changing 

  useEffect (() => {
    document.querySelector('html').classList.remove('dark' , 'light')
    document.querySelector('html').classList.add(themeMode)
  } , [themeMode])

  return (
    <ThemeProvider value={{ themeMode, lighttheme, darktheme }}>
      <h1 className="p-4 bg-purple-500 text-3xl"> Themes Switcher </h1>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4"></div>
            <ThemeButton />
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}



export default App;
