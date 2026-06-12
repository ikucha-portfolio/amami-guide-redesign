export default function Container({
  children,
  className = "",
}) {
  return (
    <div
      className={`
        max-w-[1200px]
        mx-auto
        px-8
        ${className}
      `}
    >
      {children}
    </div>
  );
}