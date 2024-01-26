
import featuredImg from '../../assets/home/featured.jpg'
const Featured = () => {
    return (
        <div className="hero h-[800px] bg-fixed"  style={{backgroundImage: 'url(https://i.ibb.co/RQkvthc/banner.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className=" flex justify-center items-center px-32 gap-12">
            <div>
                <img className='w-[550px] h-[300px]' src={featuredImg}/>
            </div>
            <div className='text-left'>
            <h1 className="mb-5 text-5xl font-bold">Januray 13 2024</h1>
            <h3 className='mb-5  font-semibold '>Where Can I get Some</h3>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary border">Read More</button>
           </div>
          </div>
        </div>
      </div>
    );
};

export default Featured;