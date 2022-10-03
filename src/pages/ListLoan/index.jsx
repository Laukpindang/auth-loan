import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ListLoan = () => {
    const navigate = useNavigate();
    const [dataLoan, setDataLoan] = useState([]);
    const [statusCode, setStatusCode] = useState(0);

    const getData = async () => (
        await axios.get('https://api.pinang-ritel.dev.rayain.net/api/loan/', {
            headers: {
                Authorization: 'token ' + localStorage.getItem('token')
            }
        }).then((res) => {
            setDataLoan(res?.data?.results)
            setStatusCode(res?.status)
        }).catch((err) => {
            setStatusCode(err?.responses)
        })
    );

    useEffect(() => {
        getData()
    },[])

    return (
        <>
        {
            statusCode === 200 ?
            (
                <div className="list">
                    <div className="judul"><h2>List Peminjaman</h2></div>
                    <table border='1' cellPadding='5' cellSpacing='0'>
                        <thead>
                            <tr>
                                <th>Nomor KTP</th>
                                <th>Nama Peminjam</th>
                                <th>Nominal Pinjaman</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                dataLoan.map((item, key) => (
                                    <tr key={key}>
                                        <td>{item?.main_borrower_id_card_num}</td>
                                        <td>{item?.main_borrower_name}</td>
                                        <td className="amount-loan"><span>Rp</span>{item?.amount?.toLocaleString()}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table><br />
                    <button onClick={() => navigate('/dashboard') }>Kembali</button>
                </div>
            ) :
            (
                <h3 style={{textAlign: 'center', color: 'red'}}>Mohon Tunggu Sebentar</h3>
            )
        }
        </>        
    );
};
export default ListLoan;