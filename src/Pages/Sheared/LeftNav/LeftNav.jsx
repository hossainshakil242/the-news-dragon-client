import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:4000/categories`)
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, []);
    console.log(categories);

    return (
        <div>
            <h2>Left Nav</h2>

            <div className='ps-3'>
                {
                    categories.map(item => <p key={item.id}>
                        <Link to={`/category/${item.id}`} className='text-decoration-none text-success fs-5'>{item.name}</Link>
                    </p>)
                }
            </div>

        </div>
    );
};

export default LeftNav;