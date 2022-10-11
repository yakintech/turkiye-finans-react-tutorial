import React from 'react'

function ProductTable({ products }) {
    return (<>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Unit Price</th>
                    <th>Units In Stock</th>
                </tr>
            </thead>
            <tbody>
                {
                    products && products.map((item) => {
                        return <tr>
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

export default ProductTable