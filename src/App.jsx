import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddData, DeleteUser, EditUser, ViewData } from "./action/action";

function App() {
  const [work, setWork] = useState("");
  const [editId,setEditId] = useState("") 
  const dispatch = useDispatch();

  const FormHandler = (e) => {
    e.preventDefault();
    if(editId){
      dispatch(EditUser(editId,work))
      setEditId(null)
      setWork("")
    } else{
      dispatch(AddData({work}));
      setWork("");
    }
  
  };

  let allToDos = useSelector(state=>state.FirestoreReducer.users)

  const EditUserHandle = (item) =>{
    setEditId(item.id)
    setWork(item.work)
  }
  const CancelEdit = () =>{
    setEditId(null)
    setWork("")
  }

useEffect(()=>{
  dispatch(ViewData())
},[dispatch])
  return (
    <>
      <Container>
        <div className="main col-lg-10 justify-content-center d-flex">
          <div className="header w-100">
            <h1 className="head  w-100 justify-content-center d-flex text-white">
              {" "}
              TO DO LIST
            </h1>
            <div>
              <form
                action=""
                className="d-flex justify-content-between"
                onSubmit={FormHandler}
              >
                <input
                  type="text"
                  placeholder="enter Work..."
                  onChange={(e) => setWork(e.target.value)}
                  value={work}
                ></input>
                <button className="btn btn-primary mx-1" type="submit">
                  {editId ? "Update" : "Submit"}
                </button>
                {editId && (
                <button className="btn btn-primary" type="submit" onClick={()=>CancelEdit()}>
                  cancel
                </button>
                )}
              </form>
            </div>
            <div className="box">
              <table className="table table-striped" border={"1px"}>
                <thead>
                  <tr>
                    <th className="work">Work</th>
                    <th className="action">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    allToDos.map((item)=>{
                      return (
                        <tr key={item.id} >
                          <td>{item.work}</td>
                          <td><button className="btn btn-danger mx-2 mt-1" onClick={()=>dispatch(DeleteUser(item.id))}>Remove</button>
                          <button className="btn btn-success mx-2 mt-1" onClick={()=>EditUserHandle(item)} >Modify</button></td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default App;
