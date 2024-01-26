import React from 'react';

const PortCard = ({port}) => {
    const {_id, recipe,category,title,price,img} = port
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl h-[300px]" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-[#151515] text-xl">{title}</h2>
          <p>{recipe}</p>
          <p>${price}</p>
          <div className="card-actions">
            <button className="btn btn-outline btn-warning btn-primary">Order Now</button>
          </div>
        </div>
      </div>
    );
};

export default PortCard;