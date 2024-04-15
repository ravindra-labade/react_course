import React, { useEffect } from 'react';
import axios from 'axios';
import { useState} from 'react';
import { NavLink } from 'react-router-dom';

function Show() {

    const [users, setUser] = useState([])

    async function fetchData(){
        const result = await axios.get('http://localhost:5000/users')
        setUser(result.data)
    }

    useEffect(()=>{
        fetchData();
    }, [])
  return (
    <>
        <table className='table table-warning table-striped'>
            <thead>
                    <tr>
                        <th>SR NO</th>
                        <th>COURSE NAME</th>
                        <th>TUTOR</th>
                        <th>ACTION</th>
                    </tr>
            </thead>
            <tbody>
                {
                    users.map((object)=>{
                        return(
                            <tr>
                                <td>{object.sr}</td>
                                <td>{object.cname}</td>
                                <td>{object.tutor}</td>
                                <td>
                                    <NavLink to={`/update/${object.id}`}><button className='btn btn-outline-warning btn-sm me-3'>UPDATE</button></NavLink>
                                    <NavLink to={`/delete/${object.id}`}><button className='btn btn-outline-danger'>DELETE</button></NavLink>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </>
  )
}

export default Show