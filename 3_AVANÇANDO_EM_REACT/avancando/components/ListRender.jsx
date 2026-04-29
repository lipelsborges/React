import {useState} from 'react';

const listRender = () => {
    const [list] = useState(["Felipe", "Pedro", "Luiza"])

    const [users, setUsers] =useState([
        {id: 1, name: "Felipe", age: 20},
        {id: 2, name: "Pedro", age: 24},
        {id: 3, name: "Luiza", age: 18}
    ])

    const  deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers) =>
            prevUsers.filter((user) => randomNumber !== user.id) 
        );
    }
  return (
    <div>
        {/* Render sem key */}
        <ul>
            {list.map((item) => (
                <li>{item}</li>
            ))}
        </ul>
        
        {/* Render com key */}
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.age} anos
                </li>
            ))}
        </ul>

        {/* 6 - previous state */}
        <button onClick={deleteRandom}>
            Delete random user
        </button>
    </div>
  )
}

export default listRender