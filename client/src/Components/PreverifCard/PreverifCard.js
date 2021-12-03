import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../JS/actions/agent";
const PreverifCard = ({ user }) => {
  const dispatch = useDispatch();
  return (
    <div>
      {/* <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      /> */}
      <div className="container">
        {/* <div className="row"> */}
        {/* <div className="col-md-12"> */}
        <div className="card">
          <div className="card-body">
            {/* <h5 className="card-title text-uppercase mb-0">
              Clients pré-enregistrés
            </h5> */}
          </div>
          {/* <div className="table-responsive"> */}
          <table className="table no-wrap user-table mb-0">
            {/* <thead> */}
            <tr>
              <th
                scope="col"
                className="border-0 text-uppercase font-medium pl-4"
              >
                Name
              </th>
              <th scope="col" className="border-0 text-uppercase font-medium">
                CIN
              </th>
              <th scope="col" className="border-0 text-uppercase font-medium">
                Position
              </th>
              <th scope="col" className="border-0 text-uppercase font-medium">
                Contact
              </th>
              <th scope="col" className="border-0 text-uppercase font-medium">
                CinImg
              </th>
              {/* <th
                        scope="col"
                        className="border-0 text-uppercase font-medium"
                      >
                       Email
                      </th>
                      <th
                        scope="col"
                        className="border-0 text-uppercase font-medium"
                      >
                        Category
                      </th>
                      <th
                        scope="col"
                        className="border-0 text-uppercase font-medium"
                      >
                        Manage
                      </th> */}
            </tr>
            {/* </thead> */}
            <tbody>
              <tr>
                {/* <td className="pl-4">1</td> */}
                <td>
                  <h5 className="font-medium mb-0">
                    <span> {(user && user.firstName) || ""} </span>
                    {(user && user.lastName) || ""}
                  </h5>
                  {/* <span className="text-muted">
                   hoo
                  </span> */}
                </td>
                <td>
                  <span className="text-muted">{(user && user.CIN) || ""}</span>
                  {/* <br />
                  <span className="text-muted">Past : teacher</span> */}
                </td>
                <td>
                  <span className="text-muted">
                    {(user && user.position) || ""}
                  </span>
                  {/* <br />
                        <span className="text-muted">10: 55 AM</span> */}
                </td>
                <td>
                  <span className="text-muted">
                    {(user && user.email) || ""}
                  </span>
                  <br />
                  <span className="text-muted">
                    {(user && user.phone) || ""}
                  </span>
                </td>

                <td>
                  <span className="text-muted">
                    <a href={(user && user.photo) || ""} target="_blank">
                      Cin Url recto{" "}
                    </a>
                  </span>
                    <br />
                    <span className="text-muted">
                    <a href={(user && user.photo2) || ""} target="_blank">
                      Cin Url verso{" "}
                    </a>
                  </span>
                </td>

                {/* <td>
                        <select
                          className="form-control category-select"
                          id="exampleFormControlSelect1"
                        >
                          <option>Modulator</option>
                          <option>Admin</option>
                          <option>User</option>
                          <option>Subscriber</option>
                        </select>
                      </td> */}

                <td>
                  <Link to={`/ajoutCompte/${user._id}`}>
                    <button
                      type="button"
                      className="btn btn-outline-info btn-circle btn-lg btn-circle"
                    >
                      <i className="fa fa-key" />{" "}
                    </button>
                  </Link>
                  <Link to="/home">
                    <button
                      type="button"
                      className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
                      onClick={() => dispatch(deleteUser(user._id))}
                    >
                      <i className="fa fa-trash" />{" "}
                    </button>
                  </Link>
                  {/* <button
                          type="button"
                          className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
                        >
                          <i className="fa fa-edit" />{" "}
                        </button> */}
                  {/* <button
                          type="button"
                          className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
                        >
                          <i className="fa fa-upload" />{" "}
                        </button> */}
                </td>
              </tr>
            </tbody>
          </table>
          {/* </div> */}
        </div>
      </div>
    </div>
    //   </div>
    // </div>
  );
};

export default PreverifCard;
