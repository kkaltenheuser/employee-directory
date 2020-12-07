// dependencies
import React, { useState, useEffect } from "react";
import { Card, Button, CardGroup } from "react-bootstrap";
import "./style.css";
// table var
const EmployeeTable = (props) => {
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   axios.get(`https://randomuser.me/api/?results=20`).then((response) => {
  //     setUsers(response.data.results);
  //   });
  // }, []);
// log var tile
  const Tile = ({ first, last, title, location, phone }) => {
    return (
      <div className="App">
        <h1>{`${title} ${first} ${last}`}</h1>
      </div>
    );
  };
// log props
  console.log(props);
  const userMap = props.users.map(function (el, index) {
    return (
      <CardGroup
        style={{
          marginTop: "1rem",
        }}
        key={index}
        image={el.picture.large}
        first={el.name.first}
        last={el.name.last}
        title={el.name.title}
      >
        <Card>
          <Card.Img
            variant="top"
            src={el.picture.large}
            style={{
              width: "15rem",
              height: "15rem",
              display: "block",
              margin: "auto",
              marginTop: "2rem",
            }}
          />
          <Card.Body>
            <Card.Title>
              {el.name.title} {el.name.first} {el.name.last}
            </Card.Title>
            <Card.Text>
              This is {el.name.first}'s employee card, they are are engineer at
              *insert name*.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    );
  });

  return <div>{userMap}</div>;
};

export default EmployeeTable;