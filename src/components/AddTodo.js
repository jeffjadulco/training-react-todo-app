import React, { useState } from "react";

function AddTodo(props) {
  const [title, setTitle] = useState("");

  const onChange = (e) => setTitle(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    props.addTodo(title);
    setTitle("");
  };

  return (
    <div className="columns is-centered">
      <div className="column is-half">
        <section className="section is-small">
          <form className="field" onSubmit={onSubmit}>
            <div className="field is-grouped">
              <input
                type="text"
                name="title"
                placeholder="Do something..."
                className="input is-rounded is-grey-dark is-large"
                value={title}
                onChange={onChange}
              />
              {/* <input
                type="submit"
                value="Submit"
                className="button is-primary"
                style={{ display: none }}
              /> */}
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default AddTodo;
