import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="card">
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>ID:</strong> {props.id}
          </li>
          <li>
            <strong>Title:</strong> {props.title}
          </li>
          <li>
            <strong>Department:</strong> {props.department}
          </li>
          <li>
            <strong>Salary:</strong> {props.salary}
          </li>
          <li>
            <strong>Manager:</strong> {props.manager}
          </li>
        </ul>
      </div>
      {/* <span className="remove">𝘅</span> */}
    </div>
  );
}

export default EmployeeCard;
