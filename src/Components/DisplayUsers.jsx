import DisplayUsersTemplate from './DisplayUsersTemplate';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DisplayUsers() {

    const [users, setUsers] = useState([]);


    const loadUsers = () => {
        axios.get("http://127.0.0.1:8000/api/users")
            .then(function (response) {
                if (response.status === 200) {
                    console.log(response.data);
                    setUsers(response.data);

                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }
    useEffect(() => {
        loadUsers();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            loadUsers();
        }, 15000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div>
            {
                users.map((user) => (

                    <DisplayUsersTemplate
                        key={user.id}
                        user={user}
                    />
                ))}
        </div>
    )
}

export default DisplayUsers