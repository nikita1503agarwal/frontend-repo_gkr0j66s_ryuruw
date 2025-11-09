import React, { useState } from 'react';

const images = [
  'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2068&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1502998070258-dc1338445ac2?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=2070&auto=format&fit=crop',
];

const GallerySection = () => {
  const [fileName, setFileName] = useState('');
  const [status, setStatus] = useState('');

  const handleUpload = async (e) => {
    e.preventDefault();
    // Mock upload success for now
    await new Promise((res) => setTimeout(res, 500));
    setStatus('Thanks! Your photo has been received.');
    setFileName('');
  };

  return (
    <section id="gallery" className="py-20 bg-rose-50">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-rose-900 text-center">Gallery</h2>
        <p className="mt-2 text-center text-rose-700">Moments from our journey together</p>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, idx) => (
            <img key={idx} src={src} alt={`Memory ${idx + 1}`} className="h-44 w-full object-cover rounded-xl border border-rose-100" />
          ))}
        </div>

        <form onSubmit={handleUpload} className="mt-10 rounded-2xl border border-rose-100 bg-white p-6">
          <h3 className="text-lg font-medium text-rose-900">Share your photos with us</h3>
          <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-center">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFileName(e.target.files?.[0]?.name || '')}
              className="flex-1 rounded-md border border-rose-200 bg-white px-3 py-2 file:mr-4 file:rounded-md file:border-0 file:bg-rose-600 file:px-4 file:py-2 file:text-white hover:file:bg-rose-700"
              aria-label="Upload photo"
            />
            <button
              type="submit"
              className="inline-flex justify-center rounded-full bg-rose-600 px-6 py-3 text-white shadow-md hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2"
            >
              Upload
            </button>
          </div>
          {fileName && <p className="mt-2 text-rose-700">Selected: {fileName}</p>}
          {status && <p className="mt-2 text-rose-700">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default GallerySection;
