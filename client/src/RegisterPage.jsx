import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { CREATE_USER } from './querys';


function RegisterPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const [createUser] = useMutation(CREATE_USER);

  const handleRegister = async () => {
    try {
      const { data } = await createUser({
        variables: { body: { username, email } },
      });

      console.log('Create new user:', data.createUser);

    } catch (error) {
      console.error('dont create user:', error.message);
    }
  };

  return (
    <div>
      <h2>RegisterPage</h2>
      <label>
        User Name:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        E-Mail:
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <button onClick={handleRegister}>Sign Up</button>
    </div>
  );
}

export default RegisterPage;
