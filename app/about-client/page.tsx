"use client"

import { AuthContext } from "../context/auth.context"
import styles from "./page.module.css"
import { useContext, useEffect } from "react"
import { useRouter } from "next/navigation"
import {fetcher} from "../lib/fetcher"

const page = () => {
    const router = useRouter();

    const {user, setUser} = useContext(AuthContext);

    const getMe = async () => {
        const [error, user] = await fetcher(`http://localhost:4000/users/user`);
        if(!error && user) setUser(user);
        else router.push('/login')
    }

    useEffect(() => {
        if(!user) getMe();
    }, [])

  return (
    <>
    <div>Hello!</div>
    {user ? <p>{user.name}</p> : <p>Loading...</p>}
    </>
  )
}

export default page