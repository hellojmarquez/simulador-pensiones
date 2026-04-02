import React from 'react';
import { FaXTwitter, FaFacebook } from 'react-icons/fa6';
import { IoLogoWhatsapp } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import {
  WhatsappShareButton,
  EmailShareButton,
  TwitterShareButton,
  FacebookShareButton,
} from 'react-share';

type SocialProps = {
  bnsp: number;
  bci: number;
};

const Social: React.FC<SocialProps> = ({ bnsp, bci }) => {
  const DATA_SHARE = `Yo ya vi cómo me afecta la reforma previsional 😱
Mi beneficio sería de: ${Number(bnsp).toLocaleString('es-CL', {
    style: 'currency',
    currency: 'CLP',
  })} con Seguro Social y de: ${Number(bci).toLocaleString('es-CL', {
    style: 'currency',
    currency: 'CLP',
  })} con Capitalización Individual.	
Descubre tus resultados acá:
#SimuladorPensiones
`;

  const URL_SITE = 'https://www.simulador-pensiones.cl/';

  const buttonBase =
    'w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg';

  return (
    <div className="card p-6 flex flex-col items-center gap-4">
      <h6 className="text-slate-700 font-semibold text-base">Comparte tus resultados</h6>

      <div className="flex gap-3">
        <WhatsappShareButton title={DATA_SHARE} separator=" " url={URL_SITE}>
          <div className={`${buttonBase} bg-green-500 hover:bg-green-600 text-white hover:shadow-green-500/30`}>
            <IoLogoWhatsapp size={22} />
          </div>
        </WhatsappShareButton>

        <TwitterShareButton url={URL_SITE} title={DATA_SHARE}>
          <div className={`${buttonBase} bg-slate-900 hover:bg-black text-white hover:shadow-slate-900/30`}>
            <FaXTwitter size={18} />
          </div>
        </TwitterShareButton>

        <EmailShareButton
          subject="Simulador de pensiones: Reforma de Pensiones"
          body={DATA_SHARE}
          separator=" "
          url={URL_SITE}
        >
          <div className={`${buttonBase} bg-blue-500 hover:bg-blue-600 text-white hover:shadow-blue-500/30`}>
            <MdEmail size={22} />
          </div>
        </EmailShareButton>

        <FacebookShareButton url={URL_SITE}>
          <div className={`${buttonBase} bg-blue-600 hover:bg-blue-700 text-white hover:shadow-blue-600/30`}>
            <FaFacebook size={20} />
          </div>
        </FacebookShareButton>
      </div>
    </div>
  );
};

export default Social;
