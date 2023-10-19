import { useState } from 'react';
import axios from 'axios'; // Import Axios
import { signupFields } from '../Forms/FormFields';
import FormAction from '../Forms/FormAction';
import Input from '../Forms/Input';
import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook } from 'react-icons/ai';

export default function Signup() {
  const fieldsState = {};
  signupFields.forEach(field => (fieldsState[field.id] = ''));

  const [signupState, setSignupState] = useState(fieldsState);

  const handleChange = e =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(signupState);
    createAccount();
  };

  const createAccount = async () => {
    try {
      const response = await axios.post('/api/signup', signupState); // Send a POST request to the sign-up endpoint
      console.log(response.data); // Handle the response from the backend
      // You can redirect the user or display a success message here
    } catch (error) {
      console.error(error); // Handle any errors that occur during the API call
      // Display an error message to the user
    }
  };

  return (
    <form className="mt-8 px-60 pt-30 space-y-6" onSubmit={handleSubmit}>
      <h1>Sign Up For Spear.io</h1>
      <p>We Are The #1 Rated App To Take Your Hunting And Diving To The Next Level!</p>
      <div className="">
        {signupFields.map(field => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={signupState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
        <FormAction handleSubmit={handleSubmit} text="Signup" />
        <div>
          <button className='align-middle gap-2'>
            <FcGoogle size={32} style={{ marginRight: '8px' }} />Sign Up With Google
          </button>
          <button className='align-middle gap-2'>
            <AiFillFacebook size={32} style={{ marginRight: '8px', color: 'blue' }} />Sign Up With Facebook
          </button>
        </div>
      </div>
    </form>
  );
}

