import { createTheme, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import PrivateLayout from "./components/layouts/PrivateLayout";
import PublicLayout from "./components/layouts/PublicLayout";
import { LoginPage } from "./pages/auth/Login";
import { Contact } from "./pages/contact/Contact";
import HomePage from "./pages/HomePage";

export const mdTheme = createTheme({
  palette: {
    primary: {
      main: '#7986cb',
    },
    secondary: {
      main: '#E2E8F5',
    },
  },
});

const App = () => {
  return(
    <ThemeProvider theme={mdTheme}>
      <Routes>
        <Route path="/" element={<PrivateLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/contacto" element={<Contact />}/>
        </Route>
        <Route path="/login" element={<PublicLayout />}>
          <Route index element={<LoginPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
