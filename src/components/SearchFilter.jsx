import Filter from "../svg/Filter";
const SearchFilter = ({ onFilterOptionChange }) => {
  const handleChange = (e) => {
    const selectedStatus = e.target.value;
    onFilterOptionChange?.(selectedStatus);
  };

  return (
    <div className="flex gap-4 items-center">
      <Filter />
      <select
        onChange={handleChange}
        className="appearance-none bg-zinc-900 accent-orange-600 border-none outline-none rounded-sm"
      >
        <option>All</option>
        <option>Pending</option>
        <option>Delivered</option>
      </select>
    </div>
  );
};

export default SearchFilter;
