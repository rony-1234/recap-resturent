import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const PopulerCard = ({item}) => {
    const {_id, recipe,category,title,price,img} = item
    return (
      <div>
   
    <div className="flex space-x-4">
      <img style={{borderRadius:"0px 200px 200px 200px"}}  className="w-[100px]" src={img}/>
      <div>
        <h3 className="text-xl text-black uppercase">{title}-------</h3>
        <p className="text-sm text-[#737373]">{recipe}</p>
      </div>
      <p className="text-yellow-500 text-xl">${price}</p>
    </div>
   
    </div>
    
    );
};

export default PopulerCard;