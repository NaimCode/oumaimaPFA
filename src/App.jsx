import { useState, useEffect } from 'react'
import Map from './map'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Auth from './pages/auth';
import { auth } from './utils/firebase';

import { onAuthStateChanged } from "firebase/auth";
import { redirect } from "react-router-dom";
import { userStore } from './state';
import Home from './pages/home';
import { getBoutique } from './repository';
import Boutiquier from './pages/boutiquier';
import { signOut } from "firebase/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,

  },
  {
    path:"/boutiquier",
    element:<Boutiquier />
  },
  {
    path: "/auth",
    element: <Auth />,
  }
]);
function App() {
  const { setUser, logout } = userStore((state) => state)

  useEffect(() => {
    // signOut(auth).then(() => {
    //   // Sign-out successful.
    // }).catch((error) => {
    //   // An error happened.
    // });
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const boutiques = await getBoutique(user.uid)
        let isBou = false
        if (boutiques.length > 0) {
          isBou = true
        }
        setUser({ user, isBou })
      } else {
        console.log("user not logged")
        logout()
      }
    });;
    return () => {
      unsubscribe();
    };
  }, [logout, setUser]);

  return <RouterProvider router={router} />
}

export default App
