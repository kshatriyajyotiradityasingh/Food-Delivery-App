import { useEffect, useState } from "react";

const User = () => {
  const [name, setName] = useState();
  const [location, setLocation] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  //debugger;
  const fetchData = async () => {
    const data = await fetch(
      " https://api.github.com/users/kshatriyajyotiradityasingh"
    );

    const json = await data.json();

    setName(json.name);
    setLocation(json.location);
  };

  return (
    <div className="user-card">
      <h2>Name : {name}</h2>
      <h3>Location : {location}</h3>
      <h4>Contact : Kj1234@gmail.com</h4>
    </div>
  );
};

export default User;
