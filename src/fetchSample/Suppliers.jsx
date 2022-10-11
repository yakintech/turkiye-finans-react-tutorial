import React, { useEffect, useState } from 'react'

function Suppliers() {

    const [supplierList, setsupplierList] = useState([]);


    useEffect(() => {

        getSuppliers();

    }, []);

    //Bu fonksiyon supplier ları api den çekip state içerisine yerleştiriyor.
    const getSuppliers = () => {
        fetch('https://northwind.vercel.app/api/suppliers')
            .then(res => res.json())
            .then(data => {
                setsupplierList(data);
            })
    }


    const deleteSupplier = (id) => {

        // fetch('https://northwind.vercel.app/api/suppliers/' + id)

        fetch(
            `https://northwind.vercel.app/api/suppliers/${id}`
            , { method: 'DELETE' }
        )
        .then(res => res.json())
        .then(data => {
            getSuppliers();
        })



    }


    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Company Name</th>
                    <th>Contact Name</th>
                    <th>Contact Title</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    supplierList && supplierList.map((item) => {
                        return <tr>
                            <td>{item.id}</td>
                            <td>{item.companyName}</td>
                            <td>{item.contactName}</td>
                            <td>{item.contactTitle}</td>
                            <td><button onClick={() => deleteSupplier(item.id)}>Delete</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}

export default Suppliers