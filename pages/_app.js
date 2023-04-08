import "@/styles/globals.css";
import { LoaderContextProvider } from "@/context/LoaderContext";

export default function App({ Component, pageProps }) {
  return (
    <LoaderContextProvider>
      <Component {...pageProps} />
    </LoaderContextProvider>
  );
}
