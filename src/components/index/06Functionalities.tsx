import { functionalitiesData } from '@/data/index/06_functionalities.js';
import { SVGProps } from '@/utils/SVGProps.ts';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { ComponentType, useEffect, useState } from 'react';
// import { Collapse } from 'bootstrap';

const icons: { [key: string]: ComponentType<SVGProps> } = {
  SyringeIcon: dynamic(() => import('../icons/SyringeIcon.tsx')),
  FlaskIcon: dynamic(() => import('../icons/FlaskIcon.tsx')),
  CapsuleIcon: dynamic(() => import('../icons/CapsuleIcon.tsx')),
  LungsIcon: dynamic(() => import('../icons/LungsIcon.tsx')),
  StethoscopeIcon: dynamic(() => import('../icons/StethoscopeIcon.tsx')),
  MentalHealthIcon: dynamic(() => import('../icons/MentalHealthIcon.tsx')),
};

function getIcon(icon: string) {
  const IconComponent = icons[icon + 'Icon'];
  return <IconComponent colour='pink' size='small' />;
}

const FunctionalitiesSection = () => {
  const [src, setSrc] = useState(functionalitiesData.items[0].image.imageUrl);
  const [alt, setAlt] = useState(functionalitiesData.items[0].image.imageAlt);

  useEffect(() => {
    // eslint will lose its mind over this but i don't know if i can use an import statement here
    require('bootstrap/dist/js/bootstrap.bundle.min.js');

    setSrc(functionalitiesData.items[0].image.imageUrl);
    setAlt(functionalitiesData.items[0].image.imageAlt);

    const collapsibles = document.querySelectorAll(
      '#functionalitiesCollapse_container .collapse'
    );

    collapsibles.forEach((collapsible) => {
      collapsible.addEventListener('show.bs.collapse', (e) => {
        const index = +(e.target as HTMLElement).id.slice(-1);

        setSrc(functionalitiesData.items[index].image.imageUrl);
        setAlt(functionalitiesData.items[index].image.imageAlt);
      });
    });
  }, []);

  useEffect(() => {
    const image = document.getElementById(
      'functionalities_image'
    ) as HTMLImageElement;

    image.src = src;
    image.alt = alt;
  }, [alt, src]);

  return (
    <section id='index_functionalities' className='px-3 px-md-6 px-xl-8'>
      <div className='bg-white p-5 rounded-4'>
        <div className='text_container mb-5'>
          <h2 className='section_header'>{functionalitiesData.title}</h2>
        </div>

        <div className='content_container d-flex flex-column flex-md-row'>
          <div
            id='functionalitiesCollapse_container'
            className='col-12 col-md-6 col-xl-5'
          >
            {functionalitiesData.items.map((item, index) => (
              <article
                className='collapse_item'
                key={'functionalitiesCollapseItem_' + index}
                id={'functionalitiesCollapseItem_' + index}
              >
                <Link
                  href={'#functionalitiesCollapse_' + index}
                  className='collapse_header py-3 d-flex gap-2 align-items-center'
                  role='button'
                  data-bs-toggle='collapse'
                  aria-expanded={index === 0}
                  aria-controls={'#functionalitiesCollapse_' + index}
                >
                  <div className='icon_container'>{getIcon(item.icon)}</div>
                  <h3 className='elevated_header m-0'>{item.title}</h3>
                </Link>

                <div
                  id={'functionalitiesCollapse_' + index}
                  className={`collapse_content collapse ${index === 0 && ' show '} ms-0 ms-md-5`}
                  data-bs-parent='#functionalitiesCollapse_container'
                >
                  <p>{item.text}</p>

                  <Image
                    src={item.image.imageUrl}
                    alt={item.image.imageAlt}
                    width={0}
                    height={0}
                    sizes='100vw'
                    className='image_autosize d-block d-md-none object-fit-contain'
                    style={{ maxHeight: '75vw' }}
                  />
                </div>
              </article>
            ))}
          </div>

          <Image
            src={src}
            alt={alt}
            width={0}
            height={0}
            sizes='100vw'
            id='functionalities_image'
            loading='eager'
            className='image_autosize d-none d-md-block object-fit-contain'
            style={{ maxHeight: '640px', marginTop: '-40px' }}
          />
        </div>
      </div>
    </section>
  );
};

export default FunctionalitiesSection;
