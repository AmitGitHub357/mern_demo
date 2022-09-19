import axios from "axios";
import React, { useState, useEffect } from "react";

const ProjectView = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/project/").then((res) => {
      setList(res.data);
    });
  }, []);
  console.log(list);
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          {typeof list.ProjectList !== "undefined" ? (
            list.ProjectList.map((item) => {
              return (
                <>
                  <div className="mt-5">
                    <div className="card " style={{ width: "18rem" }}>
                      <img
                        src={item.images[0]}
                        className="card-img-top"
                        alt="not found img"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <p>loading...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectView;
