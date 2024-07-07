// Question #8: Fetching User List from Server

const server = () => {
    return fetch("https://jsonplaceholder.typicode.com/users");
};
 
const newName = (data) => {
    return data.json();
};

const success = (users) => {
    const newUsers = users.map(user => user.name);
    console.log(newUsers);
  };

  server()
  .then(newName)
  .then(success)

