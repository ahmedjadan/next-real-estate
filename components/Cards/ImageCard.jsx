import { useState } from 'react';
import NextImage from 'next/image';
import { memo } from 'react';

function ImageBLured({ src, styles, ...rest }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <NextImage
      src={src}
      {...rest}
      className={`duration-500 ease-in-out ${styles} ${
        isLoading
          ? 'grayscale blur-2xl scale-110'
          : 'grayscale-0 blur-0 scale-100'
      }`}
      onLoadingComplete={() => setLoading(false)}
    />
  );
}
export default memo(ImageBLured);
