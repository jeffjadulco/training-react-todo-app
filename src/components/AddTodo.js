import React, { useState } from 'react'

function AddTodo(props) {
    const [title, setTitle] = useState('');

    const onChange = e => setTitle(e.target.value);

    const onSubmit = e => {
        e.preventDefault();
        props.addTodo(title);
        setTitle('');
    }

    return (
      <form style={{ display: "flex" }} onSubmit={onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Add to do..."
          style={{ flex: "10" }}
          value = {title}
          onChange={onChange}
        />
        <input type="submit" value="Submit" style={{ flex: "1" }} />
      </form>
    )


}

export default AddTodo
