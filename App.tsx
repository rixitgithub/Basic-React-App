import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New Delhi", "San Fransisco", "Mumbai", "Tokyo", "Otto"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
