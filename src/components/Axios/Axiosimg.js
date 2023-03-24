import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from '../Header';

const Axiosimg = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("https://dummyjson.com/products?limit=15")
            .then((response) => {
                if (!response.ok) {
                    switch (response.status) {
                        case 400: break;
                        case 401: break;
                        case 404: break;
                    }
                }
                setData(response.data.products);
            })
            .catch((error) => console.log(error)); // handle error
    }, []);

    return (
        <>

            <Header />
            <div class="container mainContainer">
                <div class="row">
                    <div class="col-12">
                        <table class="table table-image">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Brand</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item) => (
                                    <tr>
                                        <th scope="row">{item.id}</th>
                                        <td class="w-25">

                                            <img className='pic'
                                                key={item.images[0]}
                                                src={item.images[0]}
                                                style={{ margin: 5 + "px" }}
                                            />

                                        </td>
                                        <td>{item.title}</td>
                                        <td>{item.brand}</td>
                                        <td>{item.category}</td>
                                        <td>2.{item.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* <div className='productInfo mainContainer'>
                {data.map((item) => (
                    <div className='wrapper' key={item.id}>
                        <img className='pic'
                            key={item.images[0]}
                            src={item.images[0]}
                            // width="100px"
                            style={{ margin: 5 + "px" }}
                        />
                        <p class="title">{item.title}</p>
                    </div>
                ))}
            </div> */}

        </>
    );
}

export default Axiosimg;