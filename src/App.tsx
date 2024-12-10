import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "კლავიატურა", amount: 10, category: "ტექნიკა" },
    { id: 2, description: "პროცესორი", amount: 100, category: "ტექნიკა" },
    { id: 3, description: "პური", amount: 1, category: "საკვები" },
    { id: 4, description: "ლიმონათი", amount: 10, category: "სასმელი" },
  ]);

  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => {
          setExpenses(expenses.filter((e) => e.id !== id));
        }}
      />
    </div>
  );
}

export default App;
