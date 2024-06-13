import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy_name",
        location: "dummy",
      },
    };
  }
  async componentDidMount() {
    const info = await fetch(
      " https://api.github.com/users/kshatriyajyotiradityasingh"
    );

    const json = await info.json();

    console.log(json);
    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {
    const { name, location } = this.state.userInfo;

    return (
      <div className="user-card">
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : kshatriyajyotiradityasingh@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
