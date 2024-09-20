import cssnano from "cssnano";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default {
  plugins: [
    tailwindcss(),
    autoprefixer(),
    cssnano({
      preset: "default",
    }),
  ],
};
