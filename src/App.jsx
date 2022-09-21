import { useState } from "react";
import QRCode from "react-qr-code";
import QrCodeLink from "qrcode";
import "./App.css";
function App() {
  const [link, setLink] = useState("");
  const [qrcodeLink, setQrcodeLink] = useState("");

  function handleGenrate(Link_url) {
    QrCodeLink.toDataURL(
      Link_url,
      {
        width: 600,
        margin: 3,
      },
      function (err, url) {
        setQrcodeLink(url);
      }
    );
  }

  function handleNewQrCode(e) {
    setLink(e.target.value);
    handleGenrate(e.target.value);
  }

  return (
    <div className="App">
      <QRCode value={link} />
      <input
        type="text"
        placeholder="Digite seu link..."
        className="input"
        value={link}
        onChange={(e) => handleNewQrCode(e)}
      />
      <a download={`qrcode.png`} href={qrcodeLink}>
        Baixar QrCode
      </a>
    </div>
  );
}

export default App;
