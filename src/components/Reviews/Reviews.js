import React, { useEffect, useState } from 'react';
import Singlereview from '../Singlereview/Singlereview';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/getreviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div >
            {
                reviews.map(review => <Singlereview
                    key={review._id}
                    review={review}
                ></Singlereview>
                )
            }
        </div>
    );
};

export default Reviews;