 import { useState } from "react";
 import "./App.css";
function App() {
const [color, setColor] = useState("white");
return (
<div className="container">
<h1 className="title">Color Picker</h1>
<div className="btn-group">
<button className="btn red" onClick={() => setColor("red")}>
Red
</button>
<button className="btn blue" onClick={() => setColor("blue")}>
Blue
</button>
<button className="btn green" onClick={() => setColor("green")}>
Green
</button>
</div>
<div className="color-box" style={{ backgroundColor: color }}></div>
</div>
);
}
export default App;