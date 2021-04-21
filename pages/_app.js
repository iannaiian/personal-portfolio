import "@styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { AnimatePresence } from "framer-motion";

function Application({ Component, pageProps, router }) {
  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      <Component {...pageProps} key={router.route} />;
    </AnimatePresence>
  );
}

export default Application;
