import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import ExportURL from "../../../hooks/URL";
import { Link } from "react-router-dom";
import moment from "moment";

const Index = () => {
  const [listBill, setListBill] = useState([]);

  const displayAllBill = async () => {
    axios.get(`${ExportURL.URL_API}/booking/GetAll`).then((res) => {
      window.$("#dataTable").DataTable().destroy();
      setListBill(res.data);
      // console.log(res);
    });
  };

  const UpdateConfirm = async (id) =>{
    axios.put(`${ExportURL.URL_API}/booking/DefaultPayment/${id}`)
    .then((res) => {
        toast.success(res.data.msg, {
          position: toast.POSITION.TOP_LEFT,
          autoClose: 2000,
        });
        displayAllBill();
        // console.log(res);
      });
  }

  const deleteBill = async (id) => {
    // console.log(id);
    axios
      .delete(`${ExportURL.URL_API}/booking/DeleteByUser/${id}`)
      .then((res) => {
        toast.success(res.data.msg, {
          position: toast.POSITION.TOP_LEFT,
          autoClose: 2000,
        });
        displayAllBill();
        // console.log(res);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      // window.$("#dataTable").DataTable().destroy();
      displayAllBill();
    }, 1200);
  }, []);

  useEffect(() => {
    window.$("#dataTable").DataTable();
  }, [listBill]);

  //   console.log(listBill.TourInfo.NameTour);

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
                    <th>Id bill</th>
                    <th>Total Cost</th>
                    <th>Total Guest</th>
                    <th>Name Tour</th>
                    <th>User Name</th>
                    <th>Status</th>
                    <th>Created_At</th>
                    <th>Updated_At</th>
                    <th>Action</th>
                    {/* <th width="10%">Name</th> */}
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Id Bill</th>
                    <th>Total Cost</th>
                    <th>Total Guest</th>
                    <th>Name Tour</th>
                    <th>User Name</th>
                    <th>Status</th>
                    <th>Created_At</th>
                    <th>Updated_At</th>
                    <th>Action</th>
                    {/* <th width="10%">Name</th> */}
                  </tr>
                </tfoot>
                <tbody>
                  {listBill.map((item, index) => {
                    console.log(typeof item.Status);
                    return (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.totalCost}</td>
                        <td>{item.totalGuest}</td>
                        <td>{item.TourInfo.NameTour}</td>
                        <td>{item.User.name}</td>
                        <td>
                          {item.Status === "Confirm" ? (
                            <button disabled type="button" class="btn btn-success btn-sm">
                              {item.Status}
                            </button>
                          ) : (
                            <button  onClick={() => UpdateConfirm(item.id)} type="button" class="btn btn-danger btn-sm">
                              {item.Status}
                            </button>
                          )}
                        </td>
                        <td>
                          {moment(item.createdAt).format(
                            "MMMM Do YYYY, h:mm:ss a"
                          )}
                        </td>
                        <td>
                          {moment(item.updatedAt).format(
                            "MMMM Do YYYY, h:mm:ss a"
                          )}
                        </td>
                        <td>
                          <div class="d-flex justify-content-around">
                            <Link
                              to={`/admin/bills/${item.id}`}
                              type="button"
                              class="btn btn-success"
                              style={{ marginRight: "10px" }}
                            >
                              Details
                            </Link>
                            <button
                              onClick={() => deleteBill(item.id)}
                              type="button"
                              class="btn btn-danger"
                            >
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
