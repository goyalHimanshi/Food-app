import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const MealItem = ({ data }) => {
    console.log(data);
    let navigate = useNavigate();
    const [rating, setRating] = useState();
    const [hover, setHover] = useState(0);
    let arr = new Array(5).fill(0);

    return (
        <>
            {
                (!data) ? "Not Found" : data.map(item => {
                    return (<>
                        <div className="card" key={item.idMeal} onClick={() => navigate(`/${item.idMeal}`)}>
                            <img src={item.strMealThumb} alt="" />
                            <h3>{item.strMeal}</h3>


                        </div>
                    </>

                    )
                })
            }

        </>
    )
}
export default MealItem;


