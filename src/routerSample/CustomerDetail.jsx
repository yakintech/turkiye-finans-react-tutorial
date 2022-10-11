import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { axiosInstance } from '../axiosSample/axiosInstance';

function CustomerDetail() {

    let { id } = useParams();

    const [detail, setdetail] = useState({});
    let navigate = useNavigate();

    useEffect(() => {

        axiosInstance.get('/customers/' + id)
            .then(res => {
                setdetail(res.data);
            })
            .catch(err => {
                navigate('/404')
            })
    }, []);

    const goBack = () => {
        navigate(-1);
    }


    return (<>
        <div>
            <button onClick={() => goBack()}>Go Back!</button>
        </div>
        <h1>Detail</h1>
        <h3>Id: {detail.id}</h3>
        <h3>Company Name: {detail.companyName}</h3>
        <h3>Street: {detail.address?.street}</h3>
        <h3>City: {detail.address?.city}</h3>
        <h3>Country: {detail.address?.country}</h3>


    </>)
}

export default CustomerDetail