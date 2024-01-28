
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import loginImg from "../../assets/others/authentication1.png"
import { useEffect, useRef, useState } from 'react';
const Login = () => {
      //   const captchaRef = useRef(null)
      //   const [disabled, setDisabled] = useState(true)
      //  useEffect(() =>{
      //   loadCaptchaEnginge(6)
      //  },[])
    
    const handleLogin = (e) =>{
         e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
    }

    // const handleValidateCaptcha = () => {
    //   const user_value_captcha = captchaRef.current.value;
    //   if(validateCaptcha(user_value_captcha)){
    //       setDisabled(false)
    //    } 
    //    else{
    //       setDisabled(true)
    //  }
    //  }
    return (
        <div className="hero min-h-screen">
        
        <div className="hero-content flex-col lg:flex-row px-16">
    <div className="text-center lg:text-left">
      
      <img className="w-[600px] h-[355px]" src={loginImg}/>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        {/* <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate/>
          </label>
          <input type="text" name="captcha" placeholder="Type above the captcha" className="input input-bordered" required />
           <button  onClick={handleValidateCaptcha}   className='btn btn-outline btn-xs my-4'>Validate</button>
        </div> */}
        <div className="form-control mt-6">
            <button  type="submit" className="btn btn-outline">Login</button>
      
        </div>
      </form>
    </div>
  </div>
</div>
    );
};


export default Login;