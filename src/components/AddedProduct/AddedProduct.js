import axios from 'axios';
import React, { useRef } from 'react';

const AddedProduct = () => {
    const nameRef = useRef();
    const categoryRef = useRef();
    const priceRef = useRef();
    const quantityRef = useRef();

    const handleAddProduct = (e) => {
        const newProduct = {
            name: nameRef.current.value,
            category: categoryRef.current.value,
            price: priceRef.current.value,
            quantity: quantityRef.current.value || 1,
        };
        if (newProduct.price > 0 && newProduct.quantity > 0) {
            axios.post('http://localhost:5000/products', newProduct)
                .then(data => {
                    if (data.data.acknowledged) {
                        alert('Your product added successfully')
                        nameRef.current.value = '';
                        categoryRef.current.value = '';
                        priceRef.current.value = '';
                        quantityRef.current.value = '';
                    }
                })
            // fetch('http://localhost:5000/products', {
            //     method: 'POST',
            //     body: JSON.stringify(newProduct),
            //     headers: {
            //         'Content-Type': 'application/json'
            //     }
            // })
            //     .then(res => res.json())
            //     .then(data => {
            //         if (data.acknowledged) {
            //             alert('Your product added successfully')
            //             nameRef.current.value = '';
            //             categoryRef.current.value = '';
            //             priceRef.current.value = '';
            //             quantityRef.current.value = '';
            //         }
            //     })
        }
        if (newProduct.price < 0) {
            alert('You can not set Negative Price')
        }
        if (newProduct.quantity < 0) {
            alert('You can not set Negative Quantity')
        }

        e.preventDefault();
    }
    return (
        <div className="container">
            <form className="bg-dark p-4 text-warning mt-5" onSubmit={handleAddProduct}>
                <label htmlFor="name">Name: </label><input className="form-control" type="text" ref={nameRef} placeholder="Name" required /><br />
                <label htmlFor="category">Category: </label><input className="form-control" type="text" ref={categoryRef} placeholder="Category" required /><br />
                <label htmlFor="price">Price: </label><input className="form-control" type="number" ref={priceRef} placeholder="Price" required /><br />
                <label htmlFor="quantity">Quantity: </label><input className="form-control" type="number" ref={quantityRef} placeholder="Quantity" /><br />
                <input className="form-control btn btn-warning" type="submit" value="Added Product" />
            </form>
        </div>
    );
};

export default AddedProduct;