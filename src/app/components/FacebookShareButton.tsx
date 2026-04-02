import { useEffect } from 'react';
import { FaFacebook } from 'react-icons/fa6';

declare global {
  interface Window {
    fbAsyncInit: () => void;
    FB: any;
  }
}

interface FacebookShareButtonProps {
  url: string;
  imageUrl: string;
  description: string;
}

const MyFacebookShareButton: React.FC<FacebookShareButtonProps> = ({
  url,
  imageUrl,
  description,
}) => {
  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: '810714064468626', // Reemplaza con tu App ID
        cookie: true,
        xfbml: true,
        version: 'v12.0',
      });
    };

    (function (d, s, id) {
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      const js = d.createElement(s) as HTMLScriptElement;
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      if (fjs && fjs.parentNode) {
        fjs.parentNode.insertBefore(js, fjs);
      } else {
        d.head.appendChild(js); // Si fjs es null, agregar el script al head
      }
    })(document, 'script', 'facebook-jssdk');
  }, []);

  const shareOnFacebook = () => {
    window.FB.ui(
      {
        method: 'feed',
        href: url, // URL que quieres compartir
        picture: imageUrl, // URL de la imagen
        hashtag: description, // Texto que quieres compartir
      },
      function (response: any) {
        console.log(response);
      }
    );
  };

  return (
    <button onClick={shareOnFacebook}>
      <FaFacebook className="text-4xl" />
    </button>
  );
};

export default MyFacebookShareButton;
