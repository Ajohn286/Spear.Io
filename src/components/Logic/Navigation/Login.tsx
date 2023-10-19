import React, { useState } from 'react';
import { loginFields } from "../Forms/FormFields";
import FormAction from "../Forms/FormAction";
import FormExtra from "../Forms/FormExtra";
import Input from "../Forms/Input";
import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook } from 'react-icons/ai';
import { useAuth0 } from '@auth0/auth0-react';

const fields = loginFields;

// Define the type of fieldsState
type FieldsState = {
  [key: string]: string;
};

// Initialize fieldsState as an empty object with the defined type
const fieldsState: FieldsState = {};
fields.forEach(field => (fieldsState[field.id] = ''));

export default function Login() {
  const [loginState, setLoginState] = useState<FieldsState>(fieldsState);
  const { loginWithRedirect } = useAuth0(); // Initialize Auth0

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Call the Auth0 login method here
    const { email, password } = loginState;

    if (!email || !password) {
      return;
    }
    // Call Auth0 login method
    loginWithRedirect();
  }

  return (
    <form className="mt-8 px-60 pt-30 space-y-6" onSubmit={handleSubmit}>
      <h2 className='text-xl'>Welcome Back! </h2>
      <div className="-space-y-px">
        {fields.map(field => (
          <Input
                key={field.id}
                handleChange={handleChange}
                value={loginState[field.id]}
                labelText={field.labelText}
                labelFor={field.labelFor}
                id={field.id}
                name={field.name}
                type={field.type}
                isRequired={field.isRequired}
                placeholder={field.placeholder} customClass={undefined}          />
        ))}
      </div>
      <div>
        <button className='align-middle gap-2'>
          <FcGoogle size={32} style={{ marginRight: '8px' }} />Sign In With Google
        </button>
        <button className='align-middle gap-2'>
          <AiFillFacebook size={32} style={{ marginRight: '8px', color: 'blue' }} />Sign In With Facebook
        </button>
      </div>
      {/* Pass props to FormAction */}
      <FormAction type="submit" text="Login" handleSubmit={handleSubmit} />
      <FormExtra /> {/* Include any extra form elements you need */}
    </form>
  );
}



