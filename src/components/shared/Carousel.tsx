import { generateRandomId } from '@/utils/generateRandomId';
import Link from 'next/link';
import { ComponentType, useEffect, useRef, useState } from 'react';

import gsap from 'gsap';
import { Draggable } from 'gsap/all';
import Image from 'next/image';

import { ArrowLeftIcon, ArrowRightIcon } from '@/components/icons';
import { SVGProps } from '@/utils/SVGProps';

gsap.registerPlugin(Draggable);

interface CarouselProps {
  slides: [
    {
      icon?: string;
      title?: string;
      text?: string[] | string;
      image?: {
        imageUrl: string;
        imageAlt: string;
        coverImage: boolean;
      };
      backgroundType: string | undefined;
      button?: {
        buttonText: string;
        buttonUrl: string;
        buttonIcon?: string;
      };
    },
  ];
  iconSet?: { [key: string]: ComponentType<SVGProps> };
}

const Carousel = (props: CarouselProps) => {
  function clamp(num: number, lower: number, upper: number) {
    return Math.min(Math.max(num, lower), upper);
  }

  function getIcon(
    icon: string,
    size:
      | 'xsmall'
      | 'small'
      | 'medium'
      | 'large'
      | 'xlarge'
      | 'xxlarge' = 'medium',
    colour:
      | 'blue'
      | 'green'
      | 'yellow'
      | 'orange'
      | 'pink'
      | 'purple'
      | 'black'
      | 'grey'
      | 'white' = 'black',
    isGradient: boolean = false
  ) {
    const IconComponent = props.iconSet![icon + 'Icon'];
    return (
      <IconComponent size={size} colour={colour} isGradient={isGradient} />
    );
  }

  const [uniqueId, setUniqueId] = useState('');
  const carouselRef = useRef(null);

  const slidesCount = props.slides.length;
  const [currentSlide, setCurrentSlide] = useState(0);

  const [totalWidth, setTotalWidth] = useState(0);

  useEffect(() => {
    const id = generateRandomId('carousel');
    setUniqueId(id);

    const scrollWidth = (carouselRef.current! as HTMLElement).scrollWidth;
    const windowWidth = document.body.clientWidth;
    const countForPadding =
      windowWidth - (carouselRef.current! as HTMLElement).offsetWidth;

    setTotalWidth(scrollWidth - windowWidth + countForPadding);
  }, []);

  useEffect(() => {
    const cardWidth = (
      (carouselRef.current! as HTMLElement).querySelector(
        '.cards_container article.carousel_card'
      ) as HTMLElement
    ).offsetWidth;

    const margin = parseInt(
      window.getComputedStyle(
        (carouselRef.current! as HTMLElement).querySelector(
          '.cards_container'
        ) as HTMLElement
      ).gap
    );

    const slideWidth = cardWidth + margin;

    let newPos = -1 * clamp(slideWidth * currentSlide, 0, totalWidth) + 2;
    const diff = totalWidth + newPos;
    if (diff < slideWidth / 2) newPos -= diff;

    if (currentSlide === 0)
      (
        document.getElementById(uniqueId + '_prevButton') as HTMLButtonElement
      ).disabled = true;
    else
      (
        document.getElementById(uniqueId + '_prevButton') as HTMLButtonElement
      ).disabled = false;

    if (currentSlide === slidesCount - 1 || -totalWidth >= newPos)
      (
        document.getElementById(uniqueId + '_nextButton') as HTMLButtonElement
      ).disabled = true;
    else
      (
        document.getElementById(uniqueId + '_nextButton') as HTMLButtonElement
      ).disabled = false;

    gsap.to(
      (carouselRef.current! as HTMLElement).querySelector(
        '.cards_container'
      ) as HTMLElement,
      {
        x: newPos,
      }
    );
  }, [currentSlide, totalWidth, slidesCount, uniqueId]);

  function onClickNext() {
    setCurrentSlide(currentSlide + 1);
    if (currentSlide >= slidesCount - 1) setCurrentSlide(0);
  }

  function onClickPrev() {
    setCurrentSlide(currentSlide - 1);
    if (currentSlide <= 0) setCurrentSlide(slidesCount - 1);
  }

  return (
    <section id={uniqueId} className='carousel' ref={carouselRef}>
      <div
        id={uniqueId + '_cardsContainer'}
        className='cards_container d-flex flex-nowrap align-content-stretch gap-3'
      >
        {props.slides.map((slide, index) => (
          <article
            key={uniqueId + '_slide_' + index}
            id={uniqueId + '_slide_' + index}
            className={`carousel_card col-10 col-md-5 col-lg-4 col-xl-3 d-flex flex-column justify-content-between p-3 rounded-4 position-relative overflow-hidden ${slide.backgroundType === 'dark' ? ' bg-black text-white' : ' bg-white text-black'}`}
            style={{ isolation: 'isolate' }}
          >
            <div className='content_container'>
              <div className='icon_container'>
                {slide.icon && (
                  <div className='icon_container ms-n1 mb-3'>
                    {getIcon(slide.icon, 'xlarge', 'pink', true)}
                  </div>
                )}
              </div>

              <div className='text_container'>
                {slide.title && (
                  <h3 className={`card_header mb-3`}>{slide.title}</h3>
                )}

                {slide.text &&
                  (Array.isArray(slide.text) ? (
                    <ul
                      className={`list-unstyled d-flex flex-column gap-2 ${slide.backgroundType === 'dark' && ' text-white'}`}
                    >
                      {slide.text.map((textItem, index) => (
                        <li
                          key={uniqueId + '_listItem_' + index}
                          id={uniqueId + '_listItem_' + index}
                          className='d-flex'
                        >
                          <div className='me-2 text-primary'>&#9702;</div>
                          {textItem}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p
                      className={`${slide.backgroundType === 'dark' && ' text-white'}`}
                    >
                      {slide.text}
                    </p>
                  ))}
              </div>

              <div
                className={`image_container ${slide.image?.coverImage && ' h-100 w-100 position-absolute top-0 start-0 z-n1'}`}
              >
                {slide.image &&
                  (slide.image.coverImage ? (
                    <>
                      <Image
                        src={slide.image.imageUrl}
                        alt={slide.image.imageAlt}
                        fill
                        sizes='100vw'
                        className='image_autosize object-fit-cover'
                      />
                      <div
                        className='overlay_gradient position-absolute top-0 start-0 w-100 h-50'
                        {...(slide.backgroundType === 'dark' && {
                          style: {
                            backgroundImage:
                              'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))',
                          },
                        })}
                      />
                    </>
                  ) : (
                    <Image
                      src={slide.image.imageUrl}
                      alt={slide.image.imageAlt}
                      width={0}
                      height={0}
                      sizes='100vw'
                      className='image_autosize'
                    />
                  ))}
              </div>

              {slide.image?.coverImage && (
                <div className='carousel_coverImage_spacer'></div>
              )}
            </div>

            <div className='button_container mt-3 mx-auto'>
              {slide.button && (
                <Link href={slide.button.buttonUrl} className='btn btn-primary'>
                  {slide.button.buttonText}

                  {slide.button.buttonIcon && (
                    <div className='icon_container d-inline-block align-middle ms-3 mt-1'>
                      {getIcon(slide.button.buttonIcon, 'xsmall', 'black')}
                    </div>
                  )}
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>

      <div
        id={uniqueId + '_slideButton_container'}
        className='slideButton_container w-100 px-3 d-flex gap-2 justify-content-end mt-3'
      >
        <button
          onClick={onClickPrev}
          id={uniqueId + '_prevButton'}
          className='carousel_button prev_button d-flex align-items-center justify-content-center pe-2'
        >
          <ArrowLeftIcon size='small' colour='grey' />
        </button>
        <button
          onClick={onClickNext}
          id={uniqueId + '_nextButton'}
          className='carousel_button next_button d-flex align-items-center justify-content-center ps-2'
        >
          <ArrowRightIcon size='small' colour='grey' />
        </button>
      </div>
    </section>
  );
};

export default Carousel;
