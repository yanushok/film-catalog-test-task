import { useState } from "react";

export const Image = ({ src, alt }) => {
  const [source, setSource] = useState(
    src === "N/A" ? "https://placehold.co/300x450" : src
  );

  return (
    <img
      src={source}
      alt={alt}
      // некоторые картинки из амазона не грузятся
      onError={() => setSource("https://placehold.co/300x450")}
    />
  );
};
