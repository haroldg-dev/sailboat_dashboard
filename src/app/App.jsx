import AppearanceProvider from "./providers/AppearanceProvider";
import RouterCreatorProvider from "./providers/RouterCreatorProvider";
import AppDashboard from "./AppDashboard";

function App() {
  return (
    <AppearanceProvider>
      <RouterCreatorProvider config={{ dashboard: <AppDashboard /> }} />
    </AppearanceProvider>
  );
}

export default App;
