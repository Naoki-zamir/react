import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';


const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignupRedirect = () => {
    navigate('/signup')
  }

  const onSubmit = async (data) => {
    try {
      await login(data);
      navigate('/inicio'); // Redirige solo si el login es exitoso
    } catch (err) {
      setError('Error en las credenciales');
    }
  };

  return (
    <Container>
      <LoginBox>
        <LeftSection>
          <GradientText>Bienvenido!</GradientText>
          <Separator />
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputGroup>
              <label htmlFor="username">Usuario</label>
              <input 
                type="text" 
                id="username" 
                placeholder="Ingrese su usuario"
                {...register('username', { required: 'Usuario requerido' })}
              />
              {errors.username && <ErrorText>{errors.username.message}</ErrorText>}
            </InputGroup>

            <InputGroup>
              <label htmlFor="password">Contraseña</label>
              <input 
                type="password" 
                id="password" 
                placeholder="Ingrese su contraseña"
                {...register('password', { required: 'Contraseña requerida' })}
              />
              {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
            </InputGroup>

            {error && <ErrorText>{error}</ErrorText>}

            <button type="submit">Iniciar sesión</button> <br /> <hr />
            <button onClick={handleSignupRedirect}>
              Registrate aqui
            </button>
          </form>
        </LeftSection>
      </LoginBox>
    </Container>
  );
};

export default Login;

// Estilos con styled-components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginBox = styled.div`
  width: 400px;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GradientText = styled.h1`
  background: linear-gradient(to right, #000000, #ff4b2b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 24px;
`;

const Separator = styled.hr`
  width: 100%;
  border: 1px solid #ddd;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;
