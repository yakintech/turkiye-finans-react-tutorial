import React, { useState } from 'react';
import { products } from '../data/products';
import _ from 'lodash'

function ProductPage() {

    const [productList, setproductList] = useState(products);
    const [orderByName, setorderByName] = useState(true);
    const [orderByUnitPrice, setorderByUnitPrice] = useState(true);
    const [name, setname] = useState('');
    const [id, setId] = useState(0);



    const sortByName = () => {
        let sortProductsByName = [];
        if (orderByName) {
            // sortProductsByName = productList.sort((a, b) => {
            //     return a.name.localeCompare(b.name);
            // });

            setorderByName(false);

           sortProductsByName =  _.orderBy(productList, ['name'],['asc']);

        }
        else {
            // sortProductsByName = productList.sort((a, b) => {
            //     return b.name.localeCompare(a.name);
            // });

             setorderByName(true);

            sortProductsByName =  _.orderBy(productList, ['name'],['desc']);


   
        }



        setproductList([...sortProductsByName])
    }

    const sortByUnitPrice = () => {
        let sortByUnitPrice = [];
        if (orderByUnitPrice) {
            sortByUnitPrice = productList.sort((a, b) => a.unitPrice - b.unitPrice);
            setorderByUnitPrice(false)
        }
        else {
            sortByUnitPrice = productList.sort((a, b) => b.unitPrice - a.unitPrice);
            setorderByUnitPrice(true)
        }
        setproductList([...sortByUnitPrice])
    }

    const searchProductsByName = (value) => {

        setname(value)
        let filteredProducts = products.filter(q => q.name.toLowerCase().includes(value.toLowerCase()));
        setproductList([...filteredProducts])

    }


    const findProductById = () => {

        //find sorugusu ile sorguya uyan 1 ADET obje bana döner ( eğer varsa yoksa undefined döner)
        let productById = products.find(q => q.id == id);
        console.log('productById', productById);
    }

    return (<>
        <div>
            <h1>Product Count: {productList.length}</h1>
        </div>
        <div>
            <label>Name:</label>
            <input type='text' onChange={(e) => searchProductsByName(e.target.value)} />
            {/* <button onClick={() => searchProductsByName()}>Search</button> */}
        </div>
        <div>
            <label>Id</label>
            <input type='text' onChange={(e) => setId(e.target.value)} />
            <button onClick={() => findProductById()}>Find</button>
        </div>
        <table>
            <thead>
                <th>Id</th>
                <th style={{ cursor: 'pointer' }} onClick={() => sortByName()}>Name</th>
                <th style={{ cursor: 'pointer' }} onClick={() => sortByUnitPrice()}>Unit Price</th>
                <th>Units In Stock</th>
            </thead>
            <tbody>
                {
                    productList && productList.map((item) => {
                        return <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.unitPrice}</td>
                            <td>{item.unitsInStock}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
    )
}

export default ProductPage