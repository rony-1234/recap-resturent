

const FoodCard = ({item}) => { 
    const {_id, recipe,category,title,price,img} = item
    return (
        <div className="card w-96  bg-base-100 shadow-xl">
        <figure><img src={img} className="h-72" alt="Shoes" /></figure>
        <p className="bg-slate-900 text-white absolute right-4 px-4 mt-4">${price}</p>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title text-[#151515] text-3xl">{title}</h2>
          <p className="text-[#737373] text-sm">{recipe}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-outline border-0 border-b-4">Add To Cart</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;