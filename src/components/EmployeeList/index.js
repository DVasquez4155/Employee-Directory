import React from "react"
import "./style.css";

function EmployeeList(props) {
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })
  return (
    <tr>
      <td>{props.employee.id}</td>
      <td>{props.employee.first_name}</td>
      <td>{props.employee.last_name}</td>
      <td>{props.employee.title}</td>
      <td>{props.employee.department}</td>
      <td>{formatter.format(props.employee.salary)}</td>
      <td>{props.employee.manager}</td>
    </tr>
  );
}

export default EmployeeList;
