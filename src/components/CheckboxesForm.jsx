function CheckboxesForm({ question, options, name, selected, onChange }) {
  return (
    <div className="form__group">
      <h3>{question}</h3>
      <ul>
        {options.map((option) => (
          <li key={option.value}>
            <label>
              <input
                type="checkbox"
                name={name}
                value={option.value}
                checked={selected.includes(option.value)}
                onChange={onChange}
              />
              {option.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CheckboxesForm;
