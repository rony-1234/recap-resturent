
import bgimg from '../../assets/home/chef-service.jpg';
const Extraside = () => {
    return (
        <div className='mt-24'>
            <div className='relative'>
                <img src={bgimg}/>
                <div className='absolute max-w-screen-lg -mt-56 ml-28 text-center  px-36 items-center bg-[#FFF]'>
                    <h3 className='text-center text-3xl mt-12'>BISTRO BOSS</h3>
                    <p className='text-xl text-center my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>
        </div>
    );
};

export default Extraside;