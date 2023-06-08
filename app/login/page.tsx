"use client"

import styles from "./page.module.css"
import { useState } from "react"
import axios from "axios";
import {useRouter} from "next/navigation"


const page = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    





    const handleSubmit = async (e:any) => {
        e.preventDefault();
         try {
            const res = await axios.post("http://localhost:4000/users/login", {username, password}, {withCredentials: true});
            // router.push('/')
            window.location.href = '/';
            console.log("logged in");
         } catch (err:any) {
            console.log(err.response.data.message);
         }
    }


  return (
    <section>
        <form className={styles.signupForm} onSubmit={handleSubmit}>

            <div>
                <label>Username</label>
                <input type='text' name="username" placeholder='' onChange={(e) => setUsername(e.target.value)}></input>
            </div>

            <div>
                <label>Password</label>
                <input type='password' name="password" placeholder='' onChange={(e) => setPassword(e.target.value)}></input>
            </div>

            <button type="submit">LOGIN</button>

        </form>
    </section>
  )
}

export default page