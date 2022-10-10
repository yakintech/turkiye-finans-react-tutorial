import React from 'react'

function BlogPost() {


    //number, string, boolean
    let post = {
        title: 'Try out a preview of the new React Docs!',
        content: 'Sed porttitor lectus nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus suscipit tortor eget felis porttitor volutpat.',
        date: '10 Ekim 2022',

    }

    //JSX içerisinde Javascript kodu yazacaksak { } blokları içerisine yazmalıyız.
    return (<>
        <h1>{post.title}</h1>
        <h3>{post.date}</h3>
        <p>{post.content}</p>
    </>
    )
}

export default BlogPost