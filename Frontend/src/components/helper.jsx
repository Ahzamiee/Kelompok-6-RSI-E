import { useState } from 'react';

export function ImageWithFallback({ src, alt, className }) {
  const [imageError, setImageError] = useState(false);

  // Fungsi ini akan dipanggil jika gambar gagal dimuat
  const handleError = () => {
    setImageError(true);
  };

  // Jika ada error, tampilkan 'fallback'
  if (imageError) {
    return (
      <div className={`${className} bg-gray-200 flex items-center justify-center text-gray-500`}>
        <span>Image not available</span>
      </div>
    );
  }

  // Jika tidak ada error, tampilkan gambar seperti biasa
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={handleError} // <-- Ini properti penting
    />
  );
}