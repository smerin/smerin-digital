import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}
html {
  font-size: 62.5%;
}
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  font-family: "Open Sans", "Segoe UI", Tahoma, sans-serif;
}
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
input, button, textarea, select {
  font: inherit;
}
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

@font-face {
  font-family: 'Open Sans';
  src: url("/fonts/OpenSans-Regular.woff2?v=1.1.0") format("woff2"), url("/fonts/OpenSans-Regular.woff?v=1.1.0") format("woff");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Open Sans';
  src: url("/fonts/Italic/OpenSans-Italic.woff2?v=1.1.0") format("woff2"), url("/fonts/Italic/OpenSans-Italic.woff?v=1.1.0") format("woff");
  font-weight: normal;
  font-style: italic;
}
@font-face {
  font-family: 'Open Sans';
  src: url("/fonts/OpenSans-Bold.woff2?v=1.1.0") format("woff2"), url("/fonts/OpenSans-Bold.woff?v=1.1.0") format("woff");
  font-weight: bold;
  font-style: normal;
}
@font-face {
  font-family: 'Open Sans';
  src: url("/fonts/OpenSans-BoldItalic.woff2?v=1.1.0") format("woff2"), url("/fonts/OpenSans-BoldItalic.woff?v=1.1.0") format("woff");
  font-weight: bold;
  font-style: italic;
}

h1 {
  font-size: 3.6rem;
}
p, li {
  font-size: 1.6rem;
}
`;
