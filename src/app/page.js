"use client";

import { useState } from "react";
import Sidebar from "./sidebar";
import QRCode from "./qrCode";
import { store } from "./store";
import { Provider } from 'react-redux'



export default function Home() {
  const [url, setUrl] = useState("");

  return (
    <Provider store={store}>
      <main
        className='flex items-center justify-center gap-24 min-h-screen'
      >
        <Sidebar
          url={url}
          setUrl={setUrl}
        />
        <QRCode
          url={url}
        />
      </main>
    </Provider>
  );
}


