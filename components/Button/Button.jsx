import React from 'react';

export default function Button({ icon, text, href, styles }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center h-full justify-between w-full px-6 py-3 ${styles}  rounded-md`}
    >
      <span className={`mr-2 `}>{text}</span>
      <span>{icon}</span>
    </a>
  );
}
