import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useParams } from 'react-router-dom';
import "./store.scss"

function StorePage() {
    const { id } = useParams();
    const [datam, setDatam] = useState([])

    useEffect(() => {
        axios.get(`https://northwind.vercel.app/api/categories/${id}`).then(({ data }) => {
            setDatam(data);
        });
    }, []);
    return (
        <>

            <div>
                {

                    <div key={datam.id} className="hoverelement">

                        <h1> {datam.id} </h1>
                        <h3> {datam.description} </h3>
                        <Link to={"/"}> <button className='btnhoverstore'> Back Product Page </button> </Link>
                    </div>

                }


            </div>




        </>
    )
}

export default StorePage