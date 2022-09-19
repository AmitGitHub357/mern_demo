import { React, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const Edit = () => {
  const [singleList, setSingleList] = useState([]);
  const navigate = useNavigate();

  const [editId, setEditId] = useState("");
  const [editList, setEditList] = useState({
    name: "",
    projectStatus: "",
    description: "",
  });

  setEditId(localStorage.getItem("id"));
  console.log(editId);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/project/${editId}`)
      .then((res) => {
        setSingleList(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [`${editId}`]);

  // console.log(singleList);
  //   setEditList({
  //     name: singleList.list.name,
  //     projectStatus: singleList.list.projectStatus,
  //     description: singleList.list.description,
  //   });

  // console.log(editList);

  // const updateHandler = (e) => {
  //   e.preventDefault();
  //   axios.put(`http://localhost:5000/api/project/${id}`).then((res) => {
  //     if (res.status == 200) alert("Data Updated SuccessFully");
  //     console.log(res.data);
  //   });
  // };

  // return (
  //   <>
  //     <div className="container">
  //       <div className="my-5 justify-content-center row">
  //         <div className="col-md-12">
  //           <div className="col-md-6">
  //             <h2 className="text-center">Update Project</h2>
  //           </div>
  {
    /* {typeof editList !== "undefined" ? (
              <div className="row">
                <div className="col-md-2 my-5 text-center">
                  <p>Name</p>
                  <input
                    required
                    type="text"
                    className="form-control"
                    value={editList.name}
                    onChange={(e) => setEditList({ name: e.target.value })}
                  />
                </div>
                <div className="col-md-2 my-5 text-center">
                  <p>Upload Images</p>
                  <input
                    required
                    type="file"
                    multiple
                    className="form-control"
                  />
                </div>
                <div className="col-md-2 my-5 text-center">
                  <p>Select Project Status</p>
                  <select
                    required
                    className="form-control text-center"
                    value={editList.projectStatus}
                    onChange={(e) =>
                      setEditList({ projectStatus: e.target.value })
                    }
                  >
                    <option
                      value="Upcoming"
                      selected={
                        editList.projectStatus == "Upcoming" ? "selected" : ""
                      }
                    >
                      Upcoming
                    </option>
                    <option
                      value="Ongoing"
                      selected={
                        editList.projectStatus == "Ongoing" ? "selected" : ""
                      }
                    >
                      Ongoing
                    </option>
                    <option
                      value="Completed"
                      selected={
                        editList.projectStatus == "Completed" ? "Completed" : ""
                      }
                    >
                      Completed
                    </option>
                  </select>
                </div>
              </div>
            ) : (
              <p>Loading</p>
            )}
            <div className="col-md-6 ">
              <p>Project Description</p>

              {typeof editList !== "undefined" ? (
                <textarea
                  value={editList.description}
                  required
                  onChange={(e) => setEditList({ description: e.target.value })}
                  className="form-control"
                ></textarea>
              ) : (
                "loading"
              )} */
  }

  {
    /* <button
                className="btn btn-dark my-5"
                onClick={(e) => updateHandler(e)}
              >
                Update Details
              </button>
              <button
                className="btn btn-secondary"
                onClick={(e) => navigate("/view")}
              >
                View Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  ); */
  }
};
export default Edit;
