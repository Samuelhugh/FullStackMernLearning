// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import PersonForm from "../components/PersonForm";
// import PersonList from "../components/PersonList";

// const Main = (props) => {
//   // Shared "state" established in this Parent component
//   const [allPeople, setAllPeople] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8000/api/people")
//       .then((res) => {
//         setAllPeople(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   //We could also write this in our PersonList component
//   const removeFromDom = (personId) => {
//     axios
//       .delete("http://localhost:8000/api/people/" + personId)
//       .then((res) => {
//         console.log(res.data);
//         setAllPeople(allPeople.filter((aPerson) => aPerson._id !== personId));
//       })
//       .catch((err) => console.log(err));
//   };

//   const createPerson = (personParam) => {
//     axios
//       .post("http://localhost:8000/api/people", personParam)
//       .then((res) => {
//         console.log(res.data);
//         setAllPeople([...allPeople, res.data]);
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div>
//       {/* PersonForm and Person List can both utilize the getter and setter established in their parent component */}
//       <PersonForm
//         onSubmitProp={createPerson}
//         initialFirstName=""
//         initialLastName=""
//       />
//       <hr />
//       <PersonList
//         allPeople={allPeople}
//         setAllPeople={setAllPeople}
//         removeFromDom={removeFromDom}
//       />
//     </div>
//   );
// };

// export default Main;
