import React from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormInput,
  FormH1,
  FormLabel,
  FormButton,
  Text,
} from "./SigninElements";
import FirebaseApp from "../credenciales";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"
const SignIn = () => {
  async function submitHndler(e){
    e.preventDefault();
    const correo = e.target.email.value;
    const contraseña = e.target.password.value;
  }
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">gaa</Icon>
          <FormContent>
            <Form onSubmit="#">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput controlId="email" htmlFor="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput controlId="password" htmlFor="password" required />
              <FormButton type="submit">Continue</FormButton>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
