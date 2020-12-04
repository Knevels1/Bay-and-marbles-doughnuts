import './App.css';
import { Home } from "./Home"
function App() {
  const user = {id: 1,name: "kyle"}
  return (
    <div className="app">
      <Home user={user}/>
    </div>
  );
}

export default App;
