import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";

export const categories = ["ტექნიკა", "საკვები", "სასმელი"] as const;

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "კლავიატურა", amount: 10, category: "ტექნიკა" },
    { id: 2, description: "პროცესორი", amount: 100, category: "ტექნიკა" },
    { id: 3, description: "პური", amount: 1, category: "საკვები" },
    { id: 4, description: "ლიმონათი", amount: 10, category: "სასმელი" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category == selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5 mt-2">
        <ExpenseForm />
      </div>
      <div className="mb-3 mt-2">
        <ExpenseFilter
          onSelectCategory={(category) => {
            setSelectedCategory(category);
          }}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => {
          setExpenses(expenses.filter((e) => e.id !== id));
        }}
      />
    </div>
  );
}

export default App;
