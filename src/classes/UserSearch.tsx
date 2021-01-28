import { Component } from "react";

interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  users: User[];
}

interface UserSearchState {
  name: string;
  user: User | undefined;
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: "",
    user: undefined,
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleClick = () => {
    const foundUser = this.props.users.find((user) => {
      return user.name === this.state.name;
    });
    this.setState({
      user: foundUser,
    });
  };
  render() {
    return (
      <div>
        <h1>User Search</h1>
        <input value={this.state.name} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Search User</button>
        <div>{this.state.user && this.state.user.name}</div>
        <div>{this.state.user && this.state.user.age}</div>
      </div>
    );
  }
}

export default UserSearch;
