import Head from 'next/head'
import React from 'react'
import NavBar from './NavBar';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Layout({title, children}) {
  return (
    <>
      <Head>
        <title>
          {title ? title + ' - RESULT PREDICTION' : 'RESULT PREDICTION'}
        </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer position="top-right" limit={1} />
      <div className="flex w-full h-screen flex-col justify-between">
        <header>
          <NavBar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
