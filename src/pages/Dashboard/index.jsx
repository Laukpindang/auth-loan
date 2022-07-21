import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './style.scss';

const DashboardPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token !== null) {
            navigate('/dashboard')
        }
    }, [])

    const handleLogout = () => {
        localStorage.clear();
        navigate('/')
    }


    return(
        <div className="dashboard">
            <h1>Informasi Data Diri</h1><br /><br />
            <div className="dashboard-content">
        <table cellPadding={10} cellSpacing={0}>
            <tr>
                <th>Nama Lengkap </th>
                <td>:</td>
                <td>{localStorage.getItem('name')}</td>
            </tr><br />

            <tr>
                <th>Email</th>
                <td>:</td>
                <td><a href={`mailto:${localStorage.getItem('email')}`} target="_blank" rel="noreferrer">{localStorage.getItem('email')}</a></td>
            </tr><br />
            
            <tr>
                <th>Role</th>
                <td>:</td>
                <td>{localStorage.getItem('role')}</td>
            </tr><br />
            
            <tr>
                <th>Token</th>
                <td>:</td>
                <td>{localStorage.getItem('token')}</td>
            </tr><br />
        
        </table>
        <button onClick={() => handleLogout()}>Logout</button><br />
        <button onClick={() => navigate('/loan') }>List Pinjaman</button>
        </div></div>
    )
}
export default DashboardPage;