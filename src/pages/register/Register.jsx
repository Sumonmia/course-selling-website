import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Navbar from "../../shared/Navbar";



const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (event) =>{
    event.preventDefault();
    // const name = event.target.name.value;
    // console.log(name);

    const form = new FormData(event.currentTarget);
    console.log(form);

    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    console.log(name, photo, email, password);

    createUser(email, password)
    .then((result)=>{
      console.log(result.user)
      handleUserProfile(name, photo);
      toast.success("User Register Successful", {
        position: "top-right",
      })
      navigate("/login");
    })
    .catch((error)=>{
      console.log(error)
    })
  };

  const handleUserProfile = (name, photo)=>{
    const profile ={displayName: name, photoURL: photo}

    updateUserProfile(profile)
    .then(()=>{})
    .catch((error)=>{
      console.log(error);
    })
  }

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero bg-gray-700 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-slate-600 w-full max-w-sm shrink-0 shadow-2xl">
                        <h1 className="text-center py-5 text-xl font-bold">Register Your Account!</h1>
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label" >
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label" name="photo">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="photoURL" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label" name="email">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email@gmail.com" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label" name="password">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-accent">Register</button>
                            </div>
                        </form>
                        <div>
                            <div className="mb-5 text-center text-xs">
                                Already Have an Account? &nbsp;
                                <Link to="/login" className="text-blue-500 underline hover:text-blue-600" > Signin here</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
