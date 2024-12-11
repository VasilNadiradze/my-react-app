interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option value="">ყველა კატეგორია</option>
      <option value="ტექნიკა">ტექნიკა</option>
      <option value="საკვები">საკვები</option>
      <option value="სასმელი">სასმელი</option>
    </select>
  );
};

export default ExpenseFilter;
