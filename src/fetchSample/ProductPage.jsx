import React, { useEffect, useState } from 'react'
import AddProduct from './AddProduct'
import ProductTable from './ProductTable'

function ProductPage() {

    const [products, setproducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);


    const getProducts = () => {
        fetch('https://northwind.vercel.app/api/products')
            .then(res => res.json())
            .then(data => {
                setproducts(data);
            })
    }

    const add = (item) => {

        let requestOptions = {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        fetch('https://northwind.vercel.app/api/products', requestOptions)
            .then(res => res.json())
            .then(data => {
                getProducts();
                alert('Success!')
            })

    }


    return (<>
        <AddProduct add={add} />
        <ProductTable products={products} />
    </>)
}

export default ProductPage