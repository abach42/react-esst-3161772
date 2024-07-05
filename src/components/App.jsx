import React, { useState, useEffect } from "react";

export function App() {
  const [formData, setFormData] = useState({});
  const [isShowDate, setIsShowDate] = useState(true);
  const [fullname, setFullname] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [select, setSelect] = useState("");

  const [isBirthdateRequired, setIsBirthdateRequired] = useState(true); // New state for required birthdate

  useEffect(() => {
    setIsBirthdateRequired(isShowDate);
    if (!isShowDate) {
      setBirthdate("");
    }
  }, [isShowDate]);

  const formSubmitted = (submitEvent) => {
    submitEvent.preventDefault();

    setFormData({ fullname, birthdate, select });
  };

  const fullnameChanged = (event) => {
    setFullname(event.target.value);
  };

  const birthdateChanged = (event) => {
    setBirthdate(event.target.value);
  };

  const selectChanged = (event) => {
    setSelect(event.target.value);
  };

  const showDateHandler = () => {
    setIsShowDate(!isShowDate);
  };

  return (
    <>
      <header>
        <h1>Controlled Forms ✅</h1>
      </header>

      <main>
        <form onSubmit={formSubmitted}>
          <fieldset>
            <legend>Persönliche Daten</legend>

            <p>
              <label htmlFor="fullname">Name:</label>
              <br />
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Ihr Name"
                required={true}
                value={fullname}
                onInput={fullnameChanged}
              />
            </p>

            <p>
              <label htmlFor="toggleDate">
                Toggle Date
              </label>
              <br />
              <input
                type="checkbox"
                name="toggleDate"
                defaultChecked={true}
                onChange={showDateHandler}
              />
            </p>

            {isShowDate && (
              <p>
                <label htmlFor="birthdate">
                  Geburtstag:
                </label>
                <br />
                <input
                  type="date"
                  id="birthdate"
                  name="birthdate"
                  required={isBirthdateRequired} // Use separate required state
                  onInput={birthdateChanged}
                  value={birthdate}
                />
              </p>
            )}

            <p>
              <label htmlFor="mySelect">
                Select-Feld:
              </label>
              <br />
              <select id="select" name="select" defaultValue="" required={true} onInput={selectChanged}>
                <option value="" />
                <option value="someOption">
                  Some option
                </option>
                <option value="otherOption">
                  Other option
                </option>
              </select>
            </p>

            <p>
              <button type="submit">
                Formular absenden
              </button>
            </p>
          </fieldset>
        </form>

        <h2>Abgesendete Daten:</h2>
        {JSON.stringify(formData)}
      </main>
    </>
  );
}