"use client"
import  stor  from "./Stor";
import { useRef } from "react";
import {Provider}  from 'react-redux'





export default function StoreProvider({ children }) {
    const storeRef = useRef(null)
    if (!storeRef.current) {
      storeRef.current = stor()
    }
  
    return <Provider store={storeRef.current}>{children}</Provider>
  }