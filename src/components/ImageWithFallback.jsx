export function ImageWithFallback({

  src,

  alt,

  style,

  className,

}) {

  return (

    <img

      src={src}

      alt={alt}

      style={style}

      className={className}

    />

  );

}