import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from './../axiosSample/axiosInstance'

function CustomerPage() {

    const [customers, setcustomers] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {

        axiosInstance.get('https://northwind.vercel.app/api/customers')
            .then(res => {
                setcustomers(res.data);
            })


    }, [])

    const goToDetail = (id) => {

        navigate('/customers/' + id);

    }

    return (<>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Company Name</th>
                    <th>Contact Name</th>
                </tr>
            </thead>
            <tbody>
                {
                    customers && customers.map((item) => {
                     return   <tr style={{cursor:'pointer'}} onClick={() => goToDetail(item.id)}>
                            <td>{item.id}</td>
                            <td>{item.companyName}</td>
                            <td>{item.contactName}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
    )
}

export default CustomerPage