import React, { useState, useEffect } from "react";
import Todoform from "./Todoform";
import fire from "../Config/fire";
import "./Todo.css";
import swal from "sweetalert";

const Todo = () => {
  const [todoObjects, settodoObjects] = useState({});
  const [currentId, setCurrentId] = useState("");

  useEffect(() => {
    fire
      .database()
      .ref()
      .child("todos")
      .on("value", (snapshot) => {
        //console.log(snapshot);
        if (snapshot.val() !== null) settodoObjects(snapshot.val());
        else settodoObjects({});
      });
  }, []);

  const addOrEdit = (obj) => {
    if (currentId === "")
      fire
        .database()
        .ref()
        .child("todos")
        .push(obj, (err) => {
          if (err) console.log("errorrr", err);
          else setCurrentId("");
        });
    else
      fire
        .database()
        .ref()
        .child(`todos/${currentId}`)
        .set(obj, (err) => {
          if (err) console.log("errorrr", err);
          else setCurrentId("");
        });
  };

  const onDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fire
          .database()
          .ref()
          .child(`todos/${id}`)
          .remove((err) => {
            if (err) console.log("errorrr", err);
            else setCurrentId("");
          });
        swal("Your note has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your note is safe!");
      }
    });
  };
  return (
    <>
      <div>
        <Todoform {...{ addOrEdit, currentId, todoObjects }} />
      </div>
      <div className="intododiv">
        <table>
          <thead>
            <tr>
              <th style={{ paddingLeft: "36%", fontSize: "20px" }}>
                Your Notes
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(todoObjects).map((id) => {
              return (
                <tr key={id}>
                  <td>
                    <p style={{ width: "300px" }}>{todoObjects[id].todo}</p>
                  </td>
                  <td style={{ paddingLeft: "25px" }}>
                    <button
                      className="btnedit"
                      onClick={() => {
                        setCurrentId(id);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btndelete"
                      onClick={() => {
                        onDelete(id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Todo;
