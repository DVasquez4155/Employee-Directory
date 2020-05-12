import React from "react"
import "./style.css";

function EmployeeList(props) {
  return (
    <tr>
      <td>{props.employee.id}</td>
      <td>{props.employee.first_name}</td>
      <td>{props.employee.last_name}</td>
      <td>{props.employee.title}</td>
      <td>{props.employee.department}</td>
      <td>{props.employee.salary}</td>
      <td>{props.employee.manager}</td>
    </tr>
  );
}

export default EmployeeList;
