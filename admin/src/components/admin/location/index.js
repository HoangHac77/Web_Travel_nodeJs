import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import moment from "moment";
import axios from "axios";
import ExportURL from "../../../hooks/URL";
import { Link } from "react-router-dom";


const Index = () => {
  const [locations, setLocation] = useState([]);

  //su dung window (su dung jquery) fix loi khi su dung table cua Datatable.net
  const displayAllLocation = async () => {
    axios.get(`${ExportURL.URL_API}/location/GetAll`).then((res) => {
      window.$("#dataTable").DataTable().destroy();
      setLocation(res.data);
      // console.log(res);
    });
  };

  const deleteLocation = async (id) => {
    // console.log(id);
    axios.delete(`${ExportURL.URL_API}/location/delete/${id}`).then((res) => {
      toast.success(res.data.message, {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 2000,
      });
      displayAllLocation();
      // console.log(res);
    });
  };

  useEffect(() => {
    setTimeout(() => {
      // window.$("#dataTable").DataTable().destroy();
      displayAllLocation();
    }, 1200);
  }, []);

  useEffect(() => {
    window.$("#dataTable").DataTable();
  }, [locations]);

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
            <Link to={"/admin/createLocation"} type="button" class="btn btn-success">Add Location</Link>
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
                    <th>Country</th>
                    <th>PlaceName</th>
                    <th>Desc</th>
                    <th>Created_At</th>
                    <th>Updated_At</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Id</th>
                    <th>Country</th>
                    <th>PlaceName</th>
                    <th>Desc</th>
                    <th>Created_At</th>
                    <th>Updated_At</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
                <tbody>

                  {locations.map((item, index) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.country}</td>
                        <td>{item.placeName}</td>
                        <td>{item.descLocation}</td>
                        <td>{moment(item.createdAt).format("MMMM Do YYYY, h:mm:ss a")}</td>
                        <td>{moment(item.updatedAt).format("MMMM Do YYYY, h:mm:ss a")}</td>                                       
                        <td>
                          <div class="d-flex justify-content-around">
                            <Link to={`/EditLocation/${item.id}`} type="button" class="btn btn-success">
                              Edit
                            </Link>
                            <button onClick={() => deleteLocation(item.id)} type="button" class="btn btn-danger">
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
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