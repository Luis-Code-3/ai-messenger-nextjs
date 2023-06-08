import { NextResponse } from 'next/server';
import { fetcherSSR } from './app/lib/fetcher-ssr';
 
// This function can be marked `async` if using `await` inside
export async function middleware(request) {
    // console.log(request.cookies);
    // const response = await fetch("http://localhost:4000/users/user", {
    // method: 'GET',
    // headers: {'cookie': request.cookies},
    // });
    // console.log(response.status);

    // const data = await response.json();
    // console.log('HEY RESPONSE:',data);
//   return NextResponse.redirect(new URL('/login', request.url));
return new Response('Hello, Next.js!', {
    status: 200,
    headers: { 'Set-Cookie': 'refresh = sdfsdfs' },
  });


    // const [error, user] = await fetcherSSR(request, NextResponse);

    // if (!user) {
    //     return NextResponse.redirect(new URL('/login', request.url));
    // } else {
    //     console.log('USERRRR',user);
    //     return NextResponse.next();
    // }

    // if (!response.ok) {
    //     return NextResponse.redirect(new URL('/login', request.url));
    // } else {
    //     return NextResponse.next();
    // }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/about-server',
};