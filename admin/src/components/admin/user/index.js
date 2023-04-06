import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import ExportURL from "../../../hooks/URL";
import { Link } from "react-router-dom";

const Index = () => {
  // eslint-disable-next-line

  const [listUser, setListUser] = useState([]);

  //su dung window (su dung jquery) fix loi khi su dung table cua Datatable.net
  const displayAllUser = async () => {
    axios.get(`${ExportURL.URL_API}/auth`).then((res) => {
      window.$("#dataTable").DataTable().destroy();
      setListUser(res.data);
      // console.log(res);
    });
  };

  const deleteUser = async (id) => {
    // console.log(id);
    axios.delete(`${ExportURL.URL_API}/auth/Delete/${id}`).then((res) => {
      toast.success(res.data.message, {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 2000,
      });
      displayAllUser();
      // console.log(res);
    });
  };

  useEffect(() => {
    setTimeout(() => {
      // window.$("#dataTable").DataTable().destroy();
      displayAllUser();
    }, 1200);
  }, []);

  useEffect(() => {
    window.$("#dataTable").DataTable();
  }, [listUser]);

  return (
    <>
      {/* <!-- Begin Page Content --> */}
      <div className="container-fluid">
        {/* <!-- Page Heading --> */}
        <h1 className="h3 mb-2 text-gray-800">Tables</h1>
        <p className="mb-4">
          DataTables is a third party plugin that is used to generate the demo
          table below. For more information about DataTables, please visit the{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://datatables.net"
          >
            official DataTables documentation
          </a>
          .
        </p>

        {/* <!-- DataTales Example --> */}
        <div className="card shadow mb-4">
          <div className="card-header py-3 d-flex justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">
              DataTables Example
            </h6>
            <Link to={"/createUser"} type="button" class="btn btn-success">Add User</Link>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Email</th>
                    <th>User Name</th>
                    <th>Phone</th>
                    <th>Img</th>
                    <th>Role</th>
                    <th>Action</th>
                    {/* <th width="10%">Name</th> */}
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Id</th>
                    <th>Email</th>
                    <th>User Name</th>
                    <th>Phone</th>
                    <th>Img</th>
                    <th>Role</th>
                    <th>Action</th>
                    {/* <th width="10%">Name</th> */}
                  </tr>
                </tfoot>
                <tbody>
                  {/* {loading ? (
                    <tr>No data</tr>
                  ) : (
                    <> */}
                  {/* {users.map((item) => (
                    <tr key={item[0]}>
                      <td>{item[1]}</td>
                    </tr>
                  ))} */}
                  {listUser.map((item, index) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.email}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td><img src={`${ExportURL.BASE_URL}/${item.image}`} width={75} height={75} alt="ImgUser" class="img-thumbnail"/></td>
                        <td>{item.roleName}</td>
                        <td>
                          <div class="d-flex justify-content-around">
                            <Link to={`/UpdateUser/${item.id}`} type="button" class="btn btn-success">
                              Edit
                            </Link>
                            <button onClick={() => deleteUser(item.id)} type="button" class="btn btn-danger">
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                  {/* </>
                  )} */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
      {/* <!-- /.container-fluid --> */}
    </>
  );
};

export default Index;
