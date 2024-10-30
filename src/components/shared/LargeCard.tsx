import Image from 'next/image';

interface Props {
  title: string;
  text: string;
  image: {
    imageUrl: string;
    imageAlt: string;
  };
  backgroundType: string | undefined;
}

const LargeCard = (props: Props) => {
  return (
    <article
      className={`large_card w-100 d-flex flex-column justify-content-between position-relative ${props.backgroundType === 'dark' && ' bg-black text-white'}`}
    >
      <div className="text_container px-3 py-3">
        <h3 className="card_header mb-1">{props.title}</h3>
        <p className="m-0">{props.text}</p>
      </div>

      <div
        className="largecard_image_container position-relative h-100 d-block d-lg-none"
        style={{ aspectRatio: '4 / 3', minHeight: '200px', maxHeight: '400px' }}
      >
        <Image
          src={props.image.imageUrl}
          alt={props.image.imageAlt}
          fill
          sizes="100vw"
          className="image_autosize object-fit-contain"
          style={{ objectPosition: '50% 100%' }}
        />
      </div>

      <div
        className="largecard_image_container position-relative h-100 d-none d-lg-block"
        style={{ aspectRatio: '4 / 3', minHeight: '320px', maxHeight: '480px' }}
      >
        <Image
          src={props.image.imageUrl}
          alt={props.image.imageAlt}
          fill
          sizes="100vw"
          className="image_autosize object-fit-contain"
          style={{ objectPosition: '50% 100%' }}
        />
      </div>
    </article>
  );
};

export default LargeCard;
