import "./homepage.scss"
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from "react-router-dom";
function HomePage() {

    const [datam, setDatam] = useState([])

    useEffect(() => {
        axios.get("https://northwind.vercel.app/api/categories").then(({ data }) => {
            setDatam(data);
        });
    }, []);

    return (
        <>

            <div className="generaldiv">

                {

                    datam.map((element) =>

                        <Link to={`/store/${element.id}`}> <div key={element.id} className="elementdiv">

                            <h1> {element.id} </h1>
                            <h3> {element.description} </h3>
                            <p> {element.name} </p>

                        </div>
                        </Link>
                    )
                }

            </div>

        </>
    )
}

export default HomePage