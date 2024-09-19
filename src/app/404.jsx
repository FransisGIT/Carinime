import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Custom404() {
    const router = useRouter();
    useEffect(() =>{
    setTimeout(()=>{
        router.push('/');
    }, 2000);
    },[router]);
  return (
    <div>
        <div className="page-404-center">
        <h1 className='title-not-found'>Ooops.....</h1>
        <h1 className='title-not-found'>Halaman yang anda cari tidak ditemukan ❤️</h1>
        </div>
    </div>
  )
}
