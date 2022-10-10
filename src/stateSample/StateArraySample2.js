import React, { useState } from 'react'
import { categorySource } from '../data/categories'

function StateArraySample2() {

    const [categoryList, setcategoryList] = useState(categorySource);

    const deleteCategory = (id) => {

        let newCategoryList = categoryList.filter(item => item.id != id);
        setcategoryList(newCategoryList)

    }


    const addRandom = () => {
        let newCategory = {
            id: 5,
            name: 'Electronic',
            description: 'Electronic products...'
        }

        setcategoryList([...categoryList, newCategory]);

     
    }

    return (
        <>
            <button onClick={() => addRandom()}>Add Random</button>
            <h1>Lenght: {categoryList.length}</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categoryList && categoryList.map((item) => {
                            return <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td><button style={{ color: 'tomato' }} onClick={() => deleteCategory(item.id)}>Delete</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default StateArraySample2