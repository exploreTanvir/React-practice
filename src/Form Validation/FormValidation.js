import { useFormik } from 'formik';
import * as yup from "yup";


const Form = () => {
    const Formik=useFormik(
        {
            initialValues:{
                name:"",
                email:"",
                password:""
            },
            onSubmit:(values,{resetForm})=>{
                console.log(values)
                resetForm(values="")
            },
            validationSchema:yup.object(
                {
                    name:yup.string().min(2,"Name must have atleast 2 characters").required(),
                    email:yup.string().email().required(),
                    password:yup.string().min(5, "Password must have atleast 2 characters").required(),
                }
            )
            
        }
    )
    const nameError=Formik.touched.name && Formik.errors.name && <span>{Formik.errors.name}</span>

    const EmailError=Formik.touched.email && Formik.errors.email && <span>{Formik.errors.email}</span>

    const passwordError=Formik.touched.password && Formik.errors.password && <span>{Formik.errors.password}</span>

  return (
    <div className='form'>
        <h1 className='component'>Form Validation component</h1>
        <h1>Form validation</h1>
<form onSubmit={Formik.handleSubmit}>
       <div>
        <label htmlFor='name'>Name : </label>
        <input type='text'  id='name' name="name" value={Formik.values.name} onChange={Formik.handleChange}/>
        {nameError}
        </div> 
       <div>

        <label htmlFor='email'>Email : </label>
        <input type='text'  id='email' name="email"  value={Formik.values.email} onChange={Formik.handleChange}/>
        {EmailError}
        </div> 
       <div>

        <label htmlFor='password'>Password : </label>
        <input type='password'  id='password' name="password"  value={Formik.values.password} onChange={Formik.handleChange}/>
        {passwordError}
        </div> 
        <button type='submit'>Submit</button>
    </form>
    </div> 
  )
}

export default Form