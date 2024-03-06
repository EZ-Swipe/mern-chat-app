const GenderCheckbox = () => {
  return (
    <div className="flex gap-4">
      <label className="label gap-2 cursor-pointer">
        <input
          type="radio"
          name="radio-4"
          className="radio radio-accent"
          checked
        />
        <span className="text-lg ">Male</span>
      </label>

      <label className="label gap-2 cursor-pointer">
        <input
          type="radio"
          name="radio-4"
          className="radio radio-accent"
        />
        <span className="text-lg">Female</span>
      </label>
    </div>
  );
};

export default GenderCheckbox;

