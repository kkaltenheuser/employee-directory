// import all dependencies + route files
import React, { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/nav";
import EmployeeTable from "./components/EmployeeTable";
import SearchForm from "./components/SearchForm/SearchForm";
import axios from "axios";
import SortButtons from "./components/SortButtons/SortButtons";
// set all variables for app
function App() {
  const [search, setSearch] = useState("");

  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState(null);
  const [sortByLastName, setSortByLastName] = useState(false);
  const [sortByTitle, setSortByTitle] = useState(false);

// pull from randomizer user api
  useEffect(() => {
    axios.get(`https://randomuser.me/api/?results=20`).then((response) => {
      setUsers(response.data.results);
    });
  }, []);

  const handleInputChange = (event) => {

    setFilteredUsers(event.target.value);

  };
// sort all users
let allUsers = users

if (filteredUsers != null) {
  allUsers = users.filter((user) => {
    return (user.name.title + " " + user.name.first + " " + user.name.last).indexOf(filteredUsers) >= 0;
  });
  console.log()
}

if (sortByLastName === true) {
  allUsers = allUsers.sort((a,b) => {
    console.log(a,b)
    return (a.name.last> b.name.last) ? 1 : ((b.name.last > a.name.last) ? -1 : 0)}); 
}

if (sortByTitle === true) {
  allUsers = allUsers.sort((a,b) => {
    console.log(a,b)
    return (a.name.title> b.name.title) ? 1 : ((b.name.title > a.name.title) ? -1 : 0)}); 
}
  return (
    <div className="App">
      <Nav />
      <SearchForm handleInputChange={handleInputChange} />
      <SortButtons setSortByLastName={setSortByLastName} setSortByTitle={setSortByTitle}/>
      <EmployeeTable users={allUsers}/>
    </div>
  );
}

export default App;