import Calender from "./Calender";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>React Calender</h1>
      <Calender timeStamp={1654665071000} />
    </div>
  );
}
