import React, { useEffect, useState } from "react";
import axios from "axios";
const DataTable = () => {
  const [store, setStore] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/task/users")
      .then((response) => response.data)
      .then((data) => setStore(data));
  }, []);
  return (
    <>
      <div className="container-fluid p-5">
        <div className="row">
          <div className="col">
            <table className="table table-hover ">
              <thead className="bg-success text-white">
                <tr>
                  <th className="border border-dark border-4 text-center">
                    I.D
                  </th>
                  <th className="border border-dark border-4 text-center">
                    Name
                  </th>
                  <th className="border border-dark border-4 text-center">
                    Age/Sex
                  </th>
                  <th className="border border-dark border-4 text-center">
                    Mobile
                  </th>
                  <th className="border border-dark border-4 text-center">
                    Address
                  </th>
                  <th className="border border-dark border-4 text-center">
                    Govt Id
                  </th>
                  <th className="border border-dark border-4 text-center">
                    Guardian Details
                  </th>
                  <th className="border border-dark border-4 text-center">
                    Nationality
                  </th>
                </tr>
              </thead>
              <tbody>
                {store.map((user, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{user.name}</td>
                      <td>{user.sex}</td>
                      <td>{user.mobile}</td>
                      <td>{user.address}</td>
                      <td>{user.govt_id}</td>
                      <td>
                        {user.guardian_label} {user.guardian_name}
                      </td>
                      <td>{user.nationality}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataTable;
