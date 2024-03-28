import CustomButton from './CustomButton';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollTo = () => {
    const ele = document.getElementById('catalogue');

    ele?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x max-h-[920px]">
        <h1 className="hero__title">
          Özgürlüğü Hisset, Yolculağa Başla!
        </h1>
        <p className="hero__subtitle text-gray-300">
          Altın standartta hizmetle unutulmaz bir yolculuğa hazır
          mısın? Araç kiralama deneyimini Altın Seçenekleri ile
          taçlandırarak her anını özel kılabilirsin.
        </p>

        <CustomButton
          title="Arabaları Keşfet"
          designs="bg-primary-blue text-white rounded-full mt-10 transition hover:bg-blue-800"
          handleClick={scrollTo}
        />
      </div>

      <div className="w-100 flex justify-center">
        <motion.img
          initial={{ translateX: 200 }}
          whileInView={{ translateX: 0 }}
          transition={{ duration: 1 }}
          src="/hero.png"
          className="img-fluid object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
