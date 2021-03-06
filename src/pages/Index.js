import React, { Component } from "react"

//Components
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import EmployeeList from "../components/EmployeeList";

//Bootstrap
import {Dropdown,Table} from 'react-bootstrap';

//Database
import employees from "../employees.json";
import departments from "../departments.json";
import roles from "../roles.json";

class Index extends Component {
  state = {
    employees,
    departments,
    roles
  };
  findEmployeeById = id => {
    var result;
    this.state.employees.forEach(employee => {
      if (employee.id === id) {
        result = employee;
      }
    })
    if (result) {
      return (result.first_name + " " + result.last_name)
    }
    else {
      return "N/A"
    }
  }
  findRoleById = id => {
    var result;
    this.state.roles.forEach(role => {
      if (role.id === id) {
        result = role;
      }
    })
    return result;
  }
  findDepartmentById = id => {
    var result;
    this.state.departments.forEach(department => {
      if (department.id === id) {
        result = department;
      }
    })
    return result;
  }
  loadEmployees = () => {employees.map(employee => {
    employee.name = employee.first_name + " " + employee.last_name;
    employee.title = this.findRoleById(employee.role_id).title;
    employee.department = this.findDepartmentById(this.findRoleById(employee.role_id).department_id).name
    employee.salary = this.findRoleById(employee.role_id).salary
    employee.manager = this.findEmployeeById(employee.manager_id)
    return null;
  })}
  handleSelect = e => {
    const list = this.state.employees;
    const rules = {a:null,b:"name"};
    switch(parseInt(e)) {
      case 0:
        rules.a = "id";
        break;
      case 1:
        rules.a = "first_name";
        rules.b = "last_name";
        break;
      case 2:
        rules.a = "title";
        break;
      case 3:
        rules.a = "department";
        break;
      case 4:
        rules.a = "salary";
        break;
      case 5:
        rules.a = "manager";
        break;
      default:
        rules.a = "id";
    }
    var sortedEmployees;
      sortedEmployees = list.sort((a, b) => (a[rules.a] > b[rules.a]) ? 1 : (a[rules.a] === b[rules.a]) ? ((a[rules.b] > b[rules.b]) ? 1 : -1) : -1 )
    this.setState({ sortedEmployees });
  }
  render() {
    this.loadEmployees();
  return (
    <div>
      <Hero backgroundImage="https://ak.picdn.net/shutterstock/videos/4388393/thumb/2.jpg">
        <h1>Employee Directory</h1>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To Employee Directory!</h1>
            <Dropdown onSelect={this.handleSelect}>
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                Sort By
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item eventKey="0">ID</Dropdown.Item>
                <Dropdown.Item eventKey="1">Name</Dropdown.Item>
                <Dropdown.Item eventKey="2">Title</Dropdown.Item>
                <Dropdown.Item eventKey="3">Department</Dropdown.Item>
                <Dropdown.Item eventKey="4">Salary</Dropdown.Item>
                <Dropdown.Item eventKey="5">Manager</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col size="md-12">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Title</th>
                  <th>Department</th>
                  <th>Salary</th>
                  <th>Manager</th>
                </tr>
              </thead>
              <tbody>
            {this.state.employees.map(employee => (
              <EmployeeList
                employee={employee}
              />
            ))}
              </tbody>
            </Table>
        </Col>
        </Row>
      </Container>
    </div>
  );
}}

export default Index;
