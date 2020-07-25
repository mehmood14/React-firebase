import React, { useState, useEffect } from "react";
import swal from "sweetalert";

const Todoform = (props) => {
  const fieldval = {
    todo: "",
  };

  const [values, setValues] = useState(fieldval);

  useEffect(() => {
    if (props.currentId === "") setValues({ ...fieldval });
    else setValues({ ...props.todoObjects[props.currentId] });
  }, [props.currentId, props.todoObjects]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name);
    console.log(value);
    setValues({ ...values, [name]: value });
  };

  const save = (e) => {
    e.preventDefault();

    console.log(values.todo);
    if (values.todo === "") {
      swal({
        title: "Empty!",
        text: "Nothing to save",
        icon: "warning",
        button: "OK",
      });
      console.log("empty");
    } else {
      swal({
        title: "Success!",
        text: "Note Saved",
        icon: "success",
        button: "OK",
      });
      props.addOrEdit(values);
    }
  };

  return (
    <form onSubmit={save}>
      <input
        className="inputfield"
        name="todo"
        type="text"
        placeholder="Add a note"
        onChange={handleChange}
        value={values.todo}
      />
      <input
        className="btnsaveupdate"
        type="submit"
        value={props.currentId === "" ? "Save" : "Update"}
      />
    </form>
  );
};

export default Todoform;
