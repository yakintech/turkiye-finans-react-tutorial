import React, { useEffect, useState } from 'react'

function Customers() {


    const [customerList, setcustomerList] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {

        //api den datayı çekip kendi state ime koyacağım.
        //then -> success

        fetch('https://northwind.vercel.app/api/customers')
            .then(res => {
                //res.json ile bana dönen response içerisindeki body i okuyup aşağıya bırakıyorum.
                return res.json();
            })
            .then(data => {
                setTimeout(() => {
                    setcustomerList(data);
                    setloading(false)
                }, 2000);
            })
            .catch(err => {
                console.log('ERROR', err);
            })


    }, [])


    return (<>
    {
        loading == true ? <span>loading...</span> : <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Company Name</th>
                <th>Contact Name</th>
                <th>Contact Title</th>
            </tr>
        </thead>
        <tbody>
            {
                customerList && customerList.map((item) => {
                    return <tr>
                        <td>{item.id}</td>
                        <td>{item.companyName}</td>
                        <td>{item.contactName}</td>
                        <td>{item.contactTitle}</td>
                    </tr>
                })
            }
        </tbody>
    </table>
    }
    
    </>
    )
}

export default Customers



