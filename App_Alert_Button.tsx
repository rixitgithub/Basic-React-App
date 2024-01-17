import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertvisible, setAlertVisible] = useState(false);

  return (
    <div>
      {alertvisible && (
        <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>
      )}
      <Button onClick={() => setAlertVisible(true)}>My Button</Button>
    </div>
  );
}

export default App;
