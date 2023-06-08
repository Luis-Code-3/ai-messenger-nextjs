import styles from "./page.module.css"
import axios from "axios";
import {fetcherSSR} from "../lib/fetcher-ssr"
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

const page = async () => {

    // const cookieStore = cookies();
    // const refresh = cookieStore.getAll();
    // console.log(refresh);
    
    

    // const [error, user] = await fetcherSSR(refresh, cookieStore, 'http://localhost:4000/users/user');
    
    // if(!user) {
    //     redirect('/login')
    // }
    // console.log(user);
    
    // request the data
    // if error go back to login page
    // else have this page loaded with correct info


  return (
    <>
    <div>Hello Server</div>
    </>
  )
}

export default page