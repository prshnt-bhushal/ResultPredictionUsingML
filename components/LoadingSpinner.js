import Head from 'next/head';
import React from 'react';

export default function LoadingSpinner() {
  return (
    <>
      <Head>
        <title>Loading...</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex w-screen h-screen opacity-25 items-center justify-center">
        <div className="dot-spinner h-[2.8rem] w-[2.8rem]">
          {[...Array(8)].map((_, index) => (
            <div
              className={`dot-spinner__dot dot-spinner__dot-${index + 1}`}
              key={index}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}
