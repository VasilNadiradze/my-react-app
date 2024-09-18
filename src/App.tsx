import ListGroup from "./components/ListGroup";

function App() {
  let heading = "ქალაქები";
  let items = ["თბილისი", "მცხეთა", "ბათუმი", "ქუთაისი"];

  return (
    <div>
      <ListGroup heading={heading} items={items} />
    </div>
  );
}

export default App;
