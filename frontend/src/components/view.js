import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { fetchProject } from "../redux/project/projectAction";
import { Link, useNavigate } from "react-router-dom";
import MaterialReactTable from "material-react-table";

// const View = () => {
//   const [datas, setDatas] = useState("");
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { project, loading, error } = useSelector((state) => state.listProject);
//   useEffect(() => {
//     dispatch(fetchProject());
//   }, []);

//   const columns = useMemo(
//     () => [
//       {
//         accessorKey: "name",
//         header: "Project Name",
//         // muiTableHeadCellProps: { sx: { color: 'green' } }, //custom props
//       },
//       // {
//       //   accessorKey: 'contactPerson', //simple recommended way to define a column
//       //   header: 'Company',
//       //   // muiTableHeadCellProps: { sx: { color: 'green' } }, //custom props
//       // },
//       // {
//       //   accessorKey: 'phoneNumber', //simple recommended way to define a column
//       //   header: 'Disease',
//       //   // muiTableHeadCellProps: { sx: { color: 'green' } }, //custom props
//       // },
//       // {
//       //   accessorKey: 'category', //simple recommended way to define a column
//       //   header: 'Category',
//       //   // muiTableHeadCellProps: { sx: { color: 'green' } }, //custom props
//       // },
//       {
//         accessorKey: "edit",
//         header: "Edit",
//         Cell: ({ cell, row }) => (
//           <button
//             className="btn btn-primary"
//             onClick={() =>
//               cell.row &&
//               cell.row.original &&
//               navigate(`/edit/${cell.row.original._id}`)
//             }
//           >
//             edit
//           </button>
//         ),
//       },
//     ],
//     []
//   );

//   return (
//     <div className="container my-5">
//       <div>
//         <h1>project List</h1>
//       </div>

//       { project && (
//         <MaterialReactTable
//           columns={columns}
//           data={project}
//           enableColumnOrdering //enable some features
//           enableRowSelection
//           enableStickyHeader
//           // onRowSelectionChange={setRowSelection} //hoist internal state to your own state (optional)
//           // state={{ rowSelection }} //manage your own state, pass it back to the table (optional)
//         />
//       )}
//     </div>
//   );
//   // const [filterStatus, setFilterStatus] = useState("");
//   // const [listFilter, setListFilter] = useState([]);
//   // const [list, setList] = useState([]);
//   // const setData = (e, data) => {
//   //   localStorage.setItem("id", data);
//   // };
//   // useSelector((state) => state.listProject);
//   // useEffect(() => {
//   //   dispatch(fetchProject);
//   // }, []);

//   // console.log(dispatch(fetchProject));

//   // const filterList = async (e) => {
//   //   e.preventDefault();
//   //   setFilterStatus(e.target.value);
//   //   const res = await axios.get(
//   //     `http://localhost:5000/api/project/filterList?projectStatus=${filterStatus}`
//   //   );
//   //   await setListFilter(res.data);

//   //   console.log(listFilter);
//   //   if (filterStatus !== "All") {
//   //     setList(listFilter);
//   //   }
//   //   console.log(list);
//   // };

//   // const fetchData = () => {
//   //   axios.get("http://localhost:5000/api/project/").then((resp) => {
//   //     setList(resp.data);
//   //   });
//   // };

//   // useEffect(() => {
//   //   fetchData();
//   //   // filterList(e)
//   // }, []);
//   // const setData = (id) => {};
//   // const [list, setList] = [1];
//   // const deleteHandler = (e, id) => {
//   //   axios
//   //     .delete(`http://localhost:5000/api/project/${id}`)
//   //     .then((res) => {
//   //       alert("Record Deleted" + res.status);
//   //       const newList = list.filter((item) => {
//   //         return item._id !== id;
//   //       });
//   //       // console.log(list);
//   //       setList(newList);
//   //     })
//   //     .catch((err) => {
//   //       console.log(err.message);
//   //     });
//   // };
//   // const filterList = (e) => {};
//   // return (
//   //   <>
//   //     <div className="container mt-3">
//   //       <h2>Projects</h2>
//   //       <p>Filter</p>
//   //       <div className="col-md-2">
//   //         <select
//   //           className="form-control text-center"
//   //           onChange={(e) => filterList(e)}
//   //         >
//   //           <option value="All">All</option>
//   //           <option value="Completed">Completed</option>
//   //           <option value="Ongoing">Ongoing</option>
//   //           <option value="Upcoming">Upcoming</option>
//   //         </select>
//   //       </div>
//   //       <table className="table table-striped">
//   //         <thead>
//   //           <tr>
//   //             <th>Name</th>
//   //             <th>Images</th>
//   //             <th>Description</th>
//   //             <th>Status</th>
//   //             <th colSpan={2} className="text-center">
//   //               action
//   //             </th>
//   //           </tr>
//   //         </thead>
//   //         <tbody>
//   //           {typeof list.ProjectList !== "undefined" ? (
//   //             list.ProjectList.map((item) => {
//   //               return (
//   //                 <tr key={item.id}>
//   //                   <td>{item.name}</td>
//   //                   <td>
//   //                     <img src={item.images} />
//   //                   </td>
//   //                   <td>{item.description}</td>
//   //                   <td>{item.projectStatus}</td>
//   //                   <td>
//   //                     <button
//   //                       className="btn text-danger bg-white"
//   //                       onClick={(e) => deleteHandler(e, item._id)}
//   //                     >
//   //                       Delete
//   //                     </button>
//   //                   </td>
//   //                   <td>
//   //                     <Link to="/edit">
//   //                       <button
//   //                         className="btn bg-secondary text-white"
//   //                         onClick={(e) => setData(e, item._id)}
//   //                       >
//   //                         Update
//   //                       </button>
//   //                     </Link>
//   //                   </td>
//   //                 </tr>
//   //               );
//   //             })
//   //           ) : (
//   //             <tr>
//   //               <td>loading</td>{" "}
//   //             </tr>
//   //           )}
//   //         </tbody>
//   //       </table>
//   //       <div>
//   //         <Link to="/">
//   //           <button className="btn btn-dark">Add Project</button>
//   //         </Link>
//   //         <Link to="/projectView">
//   //           <button className="btn btn-success">Project View</button>
//   //         </Link>
//   //       </div>
//   //     </div>
//   //   </>
//   // );
// };
const View = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const project = useSelector(state => state)
  console.log(project)
  useEffect(() => {
    dispatch(fetchProject())
  }, [])

  const columns = useMemo(
    () => [
      {
        accessorKey: 'name', 
        header: 'project Name',
        // muiTableHeadCellProps: { sx: { color: 'green' } }, //custom props
      },
      {
        accessorKey: 'status', //simple recommended way to define a column
        header: 'Status',
        // muiTableHeadCellProps: { sx: { color: 'green' } }, //custom props
      },
      {
        accessorKey: 'companyId', //simple recommended way to define a column
        header: 'Company Name',
        // muiTableHeadCellProps: { sx: { color: 'green' } }, //custom props
      },
      {
        accessorKey: 'images', //simple recommended way to define a column
        header: 'Images',
        // muiTableHeadCellProps: { sx: { color: 'green' } }, //custom props
      },
      {
        accessorKey: 'edit', 
        header: 'Edit',
        Cell: ({ cell, row }) => (
          <button className='btn btn-primary' onClick={() => (cell.row && cell.row.original) && navigate(`/edit/${cell.row.original._id}`)}>edit</button>
        ),
      },
      
    ],
    [],
  );



  return (
    <div className='container my-5'>
      <div>
      <h1>project List</h1>
      </div>
    
     {project && <MaterialReactTable 
      columns={columns} 
      data={project} 
      enableColumnOrdering //enable some features
      enableRowSelection 
      enableStickyHeader
      // onRowSelectionChange={setRowSelection} //hoist internal state to your own state (optional)
      // state={{ rowSelection }} //manage your own state, pass it back to the table (optional)
      />}
      {console.log}
    </div>
  )
}

export default View;
