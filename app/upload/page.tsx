'use client'
import React, { useState } from 'react'
import { CldUploadWidget, CldImage } from 'next-cloudinary';

interface CloudinaryResult {
    public_id: string;
}
const UploadPage = () => {
    const [publicId, setPublicId] = useState('');

  return (
    <>
    {publicId && 
        <CldImage src={publicId} width={270} height={180} alt="A coffee image"/>
    }
    <CldUploadWidget 
        uploadPreset="gtiwl8s0"
        options={{
            sources: ['local'],
            maxFiles: 5,
            multiple: false,
            styles: {}
        }}
        onUpload={(result, widget) => {
            console.log(result);
            if (result.event !== 'success') return;             
            const info = result.info as CloudinaryResult;
            setPublicId(info.public_id);
        }}>
    {({ open }) => 
        <button className="btn btn-primary" onClick={() => open()}>
            Upload
        </button>
    }
    </CldUploadWidget>
    </>
  )
}

export default UploadPage
