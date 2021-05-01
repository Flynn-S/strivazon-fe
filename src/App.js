import logo from "./logo.svg";
import "./App.css";
import TopNav from "./components/TopNav";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopNav
          title="LinkedIn"
          links={[
            "Home",
            "My Network",
            "Jobs",
            "Messaging",
            "Notifications",
            "Profile",
            "Admin",
          ]}
        />
      </header>
    </div>
  );
}

export default App;
