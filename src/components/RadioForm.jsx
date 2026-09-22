function RadioForm({ question, options, name, value, onChange }) {
  return (
    <div className="form__group radio">
      <h3>{question}</h3>
      <ul>
        {options.map((option) => (
          <li key={option.value}>
            {/* input and label must be siblings so the CSS
                "input:checked + label" rule can paint the label blue */}
            <input
              id={`${name}-${option.value}`}
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
            />
            <label htmlFor={`${name}-${option.value}`}>{option.label}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RadioForm;
