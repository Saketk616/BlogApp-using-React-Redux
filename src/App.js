import "./styling/app.css";
import Homepage from "./Components/Homepage";
import Navbar from "./Components/Navbar";
import { useSelector } from "react-redux";
import { selectSignedIn } from "./features/userSlice";
import Blogs from "./Components/Blogs";

function App() {
  const isSignedIn = useSelector(selectSignedIn);
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      {isSignedIn && <Blogs />}
    </div>
  );
}

export default App;
