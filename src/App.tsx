import MainLayout from "./components/layout/MainLayout"
import Dashboard from "./pages/Dashboard"
import { ThemeProvider } from "./context/ThemeContext"

function App() {
  return (
    <ThemeProvider>
      <MainLayout>
          <Dashboard />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App
