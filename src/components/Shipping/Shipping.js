import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth"
import './Shipping.css'
const Shipping = () => {
    const {user} = useAuth()
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(user.displayName)
    return (
        <div>
            <form className='shipping-form' onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue={user.displayName} {...register("name")} placeholder="Enter Your Name"/>
      
      {/* include validation with required or other standard HTML validation rules */}
      <input  defaultValue={user.email} {...register("email", { required: true })} placeholder="Enter Your Email"/>
      {/* errors will return when field validation fails  */}
      {errors.email && <span>This field is required</span>}
      <input defaultValue="" {...register("address")}  placeholder="Enter Your Address"/>
      <input defaultValue="" {...register("phone")} placeholder="Enter Your Phone"/>
      
      <input type="submit" />
    </form>
        </div>
    );
};

export default Shipping;