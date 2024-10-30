import { heroData } from '@/data/index/01_hero.js';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section id="index_hero" className="bg-black text-white p-0">
      <div className="text_container text-center pt-5 px-3 d-flex flex-column gap-3 mb-5">
        <h2 className="header_xl m-0 mx-auto col-lg-8">{heroData.title}</h2>
        <p className="sub_header m-0 mx-auto col-lg-8">{heroData.text}</p>
      </div>

      <div className="buttons_container d-flex gap-3 mb-5 flex-column flex-md-row align-items-center justify-content-center">
        {heroData.buttons.map((button, index) => (
          <Link
            key={'heroCTA_' + index}
            id={'heroCTA_' + index}
            href={button.buttonUrl}
            className={`btn ${index === 0 ? ' btn-primary' : ' btn-outline-primary'}`}
          >
            {button.buttonText}
          </Link>
        ))}
      </div>

      <Image
        src={heroData.image.imageUrl}
        alt={heroData.image.imageAlt}
        priority
        width={0}
        height={0}
        sizes="100vw"
        className="image_autosize mx-auto col-10 col-sm-8 col-lg-6 col-xl-5"
      />
    </section>
  );
};

export default HeroSection;
