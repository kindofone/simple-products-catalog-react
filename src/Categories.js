import {useEffect, useState} from 'react';
import './Categories.css';
import Category from './Category';

export default function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(response => response.json())
            .then(data => setCategories(data));
    }, []);

    return (
        <div className="categories">
            <h3>Categories</h3>
            <ul className="categories-list">
                {categories.map(category => (
                    <Category>
                        <span className="custom-category">{category}</span>
                    </Category>
                ))}
            </ul>
        </div>
    );
}
