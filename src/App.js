import Navbar from './components/EditPage/Navbar'
import PartyMaster from "./components/EditPage/PartyMaster";
import BasicTable from "./components/EditPage/BasicTable";
import { Route, Routes } from "react-router-dom";
import 'devextreme/dist/css/dx.light.css';
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  typography: {
    fontSize: 12.5,
    fontFamily: [
      "Poppins",
      'Roboto',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
      <Routes>
        <Route element={<Navbar />}>
          <Route path='/' element={<BasicTable />} />
          <Route path='/party' element={<PartyMaster />} />
        </Route>
      </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
