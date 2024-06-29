"use client"
import React from 'react';
import Header from './components/Header';
import Form from './components/Form';

const page = () => {
  return (
    <div>
      <Header title={'To-do app'}/>
      <Form />
      
    </div>
  );
}

export default page;
