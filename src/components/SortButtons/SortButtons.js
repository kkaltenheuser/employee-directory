import React from "react";
import "./style.css";
import { Button } from "react-bootstrap";

// import { useBoolean } from "react-hanger" (installed in package.json)


const SortButtons = (props) => {
    // const [users, setUsers] = useState([]);
    // console.log (props)
    // const sortedNames = props.sort()
    // console.log (sortedNames)
    // const sortNames = useBoolean(false)
    // const sorted = props.users.sort((a, b) => {}
        // return b.props.user.name.last - a.props.user.name.last;
    //   ); 

return(
    <div>
    <Button variant="success" onClick={()=>{
        props.setSortByLastName(true)
    }} > Sort via last name </Button>

<Button variant="success" onClick={()=>{
        props.setSortByTitle(true)
    }} > Sort via title </Button>

    <div>

    </div>

    </div>
    );
}

export default SortButtons;