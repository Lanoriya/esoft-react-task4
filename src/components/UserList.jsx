import { useEffect, useState } from "react"

export function UserList() {
  const [users, setUsers] = useState([]);
  const [usersTwo, setUsersTwo] = useState([]);

  // Then/Catch

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((data) => {
        const names = data.map(user => user.name);
        setUsers(names)
      })
      .catch(error => console.error(error))
  }, [])

  // Async/Await

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'GET',
      })

      if (!response.ok) {
        throw new Error('error fetch');
      }

      const data = await response.json();
      const users = data.map(user => user.name)

      setUsersTwo(users);
    } catch (error) {
      console.error('Error:', error)
    }
  }

  useEffect(() => {
    fetchUsers();
  }, [])

  return (
    <div className="users">
      <div className="user-item">
        {users.map((user, index) => (
          <div key={index}>{user}</div>
        ))}
      </div>
      <div className="user-item">
        {usersTwo.map((user, index) => (
          <div key={index}>{user}</div>
        ))}
      </div>
    </div>
  )
}
