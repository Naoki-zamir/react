import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    
    const onSubmit = async (data) => {
        try {
            await login(data); // Asegúrate de que la función login esté definidaÑ
            navigate('/inicio'); // Redirige solo si el registro es exitoso
        } catch (err) {
            setError('Error en las credenciales');
        }
    };

    return (
        <Container>
            <LoginBox>
                <LeftSection>
                    <GradientText>Registrarse</GradientText>
                    <Separator />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <InputGroup>
                            <label htmlFor="username">Ingrese su primer nombre</label>
                            <input
                                type='text'
                                id='username'
                                placeholder='ingrese su nombre'
                                {...register("username", { required: "El nombre del usuario es obligatorio" })}
                            />
                            {errors.username && <ErrorText>{errors.username.message}</ErrorText>}
                        </InputGroup>

                        <InputGroup>
                            <label htmlFor="username2">Ingrese su segundo nombre</label>
                            <input
                                type='text'
                                id='username2'
                                placeholder='ingrese su segundo nombre'
                                {...register("username2", { required: "El nombre del usuario es obligatorio" })}
                            />
                            {errors.username2 && <ErrorText>{errors.username2.message}</ErrorText>}
                        </InputGroup>

                        <InputGroup>
                            <label htmlFor="userlastname">Ingrese su primer apellido</label>
                            <input
                                type='text'
                                id='userlastname'
                                placeholder='ingrese su primer apellido'
                                {...register("userlastname", { required: "El nombre del usuario es obligatorio" })}
                            />
                            {errors.userlastname && <ErrorText>{errors.userlastname.message}</ErrorText>}
                        </InputGroup>

                        <InputGroup>
                            <label htmlFor="userlastname2">Ingrese su segundo apellido</label>
                            <input
                                type='text'
                                id='userlastname2'
                                placeholder='ingrese su segundo apellido'
                                {...register("userlastname2", { required: "El nombre del usuario es obligatorio" })}
                            />
                            {errors.userlastname2 && <ErrorText>{errors.userlastname2.message}</ErrorText>}
                        </InputGroup>

                        <InputGroup>
                            <label htmlFor="email">Ingrese su correo electrónico</label>
                            <input
                                type='email'
                                id='email'
                                placeholder='ingrese correo electrónico'
                                {...register("email", { required: "El correo electrónico es obligatorio" })}
                            />
                            {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
                        </InputGroup>

                        <InputGroup>
                            <label htmlFor="phone">Ingrese su teléfono</label>
                            <input
                                type='number'
                                id='phone'
                                placeholder='ingrese su teléfono'
                                {...register("phone", { required: "El teléfono es obligatorio" })}
                            />
                            {errors.phone && <ErrorText>{errors.phone.message}</ErrorText>}
                        </InputGroup>

                        <InputGroup>
                            <label htmlFor="address">Ingrese su dirección</label>
                            <input
                                type='text'
                                id='address'
                                placeholder='ingrese su dirección'
                                {...register("address", { required: "La dirección es obligatoria" })}
                            />
                            {errors.address && <ErrorText>{errors.address.message}</ErrorText>}
                        </InputGroup>

                        <InputGroup>
                            <label htmlFor="options">Selecciona una opción:</label>
                            <select id="options" {...register("options", { required: "La opción es obligatoria" })}>
                                <option value="">--Seleccione--</option>
                                <option value="opcion1">Mesero</option>
                                <option value="opcion2">Cajero</option>
                                <option value="opcion3">Panadero</option>
                            </select>
                            {errors.options && <ErrorText>{errors.options.message}</ErrorText>}
                        </InputGroup>

                        <InputGroup>
                            <label htmlFor="password">Ingrese su contraseña</label>
                            <input
                                type='password'
                                id='password'
                                placeholder='ingrese su contraseña'
                                {...register("password", { required: "la contraseña es obligatoria" })}
                            />
                            {errors.username && <ErrorText>{errors.username.message}</ErrorText>}
                        </InputGroup>

                        <button type="submit">Registrarse</button>
                    </form>
                    {error && <ErrorText>{error}</ErrorText>}
                </LeftSection>
            </LoginBox>
        </Container>
    );
}


export default Signup;

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
  background: linear-gradient(to right,rgb(116, 255, 65),rgb(45, 75, 174));
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