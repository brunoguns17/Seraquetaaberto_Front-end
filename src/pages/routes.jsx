import React from "react"
import  { Routes, } from "react-router-dom";

import Login from "./Login"

export default function Rota(){

    return(
      <Routes>
          <Route path="/" element={<Login/>} />
      </Routes>
    )
}