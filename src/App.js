import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import {useMemo} from "react";
import {themeSettings} from "./theme";
import Layout from './pages/layout/Index';
import Dashboard from "./pages/dashboard/Index";
import { useSelector } from "react-redux";
function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme} >
          <CssBaseline />
          <Routes>
          <Route element={<Layout />} >
            <Route path="/" element={<Navigate to='/dashboard' replace />} />
            <Route path="/dashboard" element={<Dashboard/>} />
          </Route>
        </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
