import React, { useState } from 'react'

function AddProduct({ add }) {

    const [name, setname] = useState('');
    const [unitPrice, setunitPrice] = useState(0);
    const [stock, setStock] = useState(0);


    const addNewProduct = () => {
        let newProduct = {
            name: name,
            unitPrice: unitPrice,
            unitsInStock: stock
        }

        add(newProduct);
    }

    return (<>
        <div>
            <label>Name: </label>
            <input type='text' value={name} onChange={(e) => setname(e.target.value)} />
        </div>
        <div>
            <label>Unit Price: </label>
            <input type='text' value={unitPrice} onChange={(e) => setunitPrice(e.target.value)} />
        </div>
        <div>
            <label>Units In Stock: </label>
            <input type='text' value={stock} onChange={(e) => setStock(e.target.value)} />
        </div>
        <div>
            <button onClick={() => addNewProduct()}>Add</button>
        </div>
    </>)
}

export default AddProduct