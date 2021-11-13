import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Myordersingle from '../Myordersingle/Myordersingle';


const Myorder = () => {
    const { user } = useAuth();
    const [myorders, setMyorder] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/myorder/${user.email}`)
            .then(res => res.json())
            .then(data => setMyorder(data))
    }, [user?.email])


    return (
        <div>
            <div className="container">
                <div className="row">
                    {
                        myorders.map(myorder => <Myordersingle
                            key={myorder._id}
                            myorder={myorder}
                        ></Myordersingle>

                        )

                    }
                </div>
            </div>
        </div>

    );
};

export default Myorder;