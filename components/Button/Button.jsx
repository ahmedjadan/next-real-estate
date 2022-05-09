export default function Button({ icon, text, href, styles, onClick }) {
  return (
    <a
      onClick={onClick}
      href={href}
      className={`inline-flex items-center h-full cursor-pointer justify-between  px-2 space-x-4 py-3 ${styles}  rounded-md`}
    >
      <span className={`mr-2 `}>{text}</span>
      <span className="text-xl">{icon}</span>
    </a>
  );
}
