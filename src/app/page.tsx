"use client"

import React, { Component, useState } from 'react';
import Todo from './components/Todo';

const Page = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button onClick={()=>{setToggle(!toggle)}}>Click</button>
      {toggle && <Todo />}
      
    </div>
  );
}

export default Page;
