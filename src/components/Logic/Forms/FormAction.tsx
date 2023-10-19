import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

type FormActionProps = {
  type?: 'submit' | 'button' | 'reset';
  text: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};


export default function FormAction({ type = 'submit', text }: FormActionProps) {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  const handleButtonClick = () => {
    if (!isAuthenticated) {
      // If the user is not authenticated, initiate Auth0 login
      loginWithRedirect();
    } else {
      // Perform some action when the user is authenticated, e.g., submit the form
      // Add your logic here
    }
  };

  if (type === 'button' || type === 'submit' || type === 'reset') {
    return (
      <button
        type={type}
        className="group relative w-full ..."
        onClick={handleButtonClick}
      >
        {text}
      </button>
    );
  }
  return null;
}



  