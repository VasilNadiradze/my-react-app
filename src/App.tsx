import ListGroup from "./components/ListGroup";

function App() {
  let citiesHeading = "ქალაქები";
  let cities = ["თბილისი", "მცხეთა", "ბათუმი", "ქუთაისი"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        heading={citiesHeading}
        items={cities}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
