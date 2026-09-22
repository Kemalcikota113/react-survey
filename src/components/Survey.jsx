import { useState } from "react";
import RadioForm from "./RadioForm";
import CheckboxesForm from "./CheckboxesForm";

const duckFeatures = [
  { value: "its yellow!", label: "its yellow!" },
  { value: "it squeeks!", label: "it squeeks!" },
  { value: "it has a logo!", label: "it has a logo!" },
  { value: "It is big!", label: "It is big!" },
];

const ratings = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
];

// everything the form starts with, also used to reset it after submitting
const emptyForm = {
  bestFeatures: [],
  worstBits: [],
  consistency: "",
  colour: "",
  logo: "",
  timeSpent: [],
  review: "",
  username: "",
  email: "",
};

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [form, setForm] = useState(emptyForm);

  // radios, textarea, name and email all just overwrite one value
  function handleChange(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  // checkboxes add or remove a value from a list
  function handleCheckboxChange(event) {
    const { name, value, checked } = event.target;
    setForm({
      ...form,
      [name]: checked
        ? [...form[name], value]
        : form[name].filter((item) => item !== value),
    });
  }

  function handleSubmit(event) {
    event.preventDefault(); // stop the browser from reloading the page
    console.log("Survey answers:", form);
    setForm(emptyForm); // reset the form back to empty
  }

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <div className="answer">
          <h3> some dude said:</h3>
          <p> what would you say are the best features about your rubber duck?</p>
          <ul>
            <li>its yellow!</li>
            <li>it has a logo</li>
          </ul>
          <p> what would you say are the worst bits of your rubber duck?</p>
          <ul>
            <li>its squeeks</li>
            <li>its big!</li>
          </ul>

          <p> how do you rate your rubber duck consistency?</p>
          <ul>
            <li>3</li>
          </ul>

          <p> how do you rate your rubber duck color?</p>
          <ul>
            <li>4</li>
          </ul>

          <p> how do you rate your rubber duck logo?</p>
          <ul>
            <li>2</li>
          </ul>

          <p> how do you like to spend time with your rubber duck?</p>
          <ul>
            <li>chatting!</li>
          </ul>

          <p> what else have you got to say about your rubber duck?</p>
          <ul>
            <li>the duck rulezzzz</li>
          </ul>
        </div>
      </section>

      <section className="survey__form">
        <form className="form" onSubmit={handleSubmit}>
          <h2> Tell us what you think about your rubber duck!</h2>

          <CheckboxesForm
            question="What would you say are the best features about your rubber duck?"
            name="bestFeatures"
            options={duckFeatures}
            selected={form.bestFeatures}
            onChange={handleCheckboxChange}
          />

          <CheckboxesForm
            question="What would you say are the worst bits of your rubber duck?"
            name="worstBits"
            options={duckFeatures}
            selected={form.worstBits}
            onChange={handleCheckboxChange}
          />

          <RadioForm
            question="How do you rate your rubber duck consistency?"
            name="consistency"
            options={ratings}
            value={form.consistency}
            onChange={handleChange}
          />

          <RadioForm
            question="How do you rate your rubber duck color?"
            name="colour"
            options={ratings}
            value={form.colour}
            onChange={handleChange}
          />

          <RadioForm
            question="How do you rate your rubber duck logo?"
            name="logo"
            options={ratings}
            value={form.logo}
            onChange={handleChange}
          />

          <CheckboxesForm
            question="How do you like to spend time with your rubber duck?"
            name="timeSpent"
            options={[
              { value: "chatting!", label: "chatting!" },
              { value: "swimming!", label: "swimming!" },
              { value: "bathing!", label: "bathing!" },
              { value: "flying!", label: "flying!" },
            ]}
            selected={form.timeSpent}
            onChange={handleCheckboxChange}
          />

          <label>
            What else have you got to say about your rubber duck?
            <textarea
              name="review"
              cols="30"
              rows="10"
              value={form.review}
              onChange={handleChange}
            ></textarea>
          </label>

          <label>
            put your name here if you feel like it!
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
            />
          </label>

          <label>
            leave us your email pretty please??
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </label>

          <input className="form__submit" type="submit" value="Submit Survey!" />
        </form>
      </section>
    </main>
  );
}

export default Survey;
