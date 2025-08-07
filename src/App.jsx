
import { useForm } from "react-hook-form";
import { Container, Theme } from "@chakra-ui/react";
import { useState } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Catalog from './components/Catalog/Catalog';
import FirstHeroSection from "./components/FirstHeroSection/FirstHeroSection";
import SecondHeroSection from "./components/SecondHeroSection/SecondHeroSection";

function App() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  console.log(watch("example")) // watch input value by passing the name of it

  return (
      <Theme appearance="light">
        <Container >
          <Header />

          <FirstHeroSection />
          <SecondHeroSection />
          <Catalog />
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input defaultValue="test" {...register("example")} />

            {/* include validation with required or other standard HTML validation rules */}
            <input {...register("exampleRequired", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <input type="submit" />
          </form>
          <Footer />
        </Container>
      </Theme>
  )
}

export default App
