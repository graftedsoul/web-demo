'use client';

import { useReasonsData } from '@/data/index/04_usereasons.js';
import dynamic from 'next/dynamic';
import styles from '@/sass/modules/UseReasons.module.scss';
import { ComponentType, useEffect } from 'react';
import { SVGProps } from '@/utils/SVGProps.ts';

const icons: { [key: string]: ComponentType<SVGProps> } = {
  BankIcon: dynamic(() => import('../icons/BankIcon.tsx')),
  CustomerServiceIcon: dynamic(
    () => import('../icons/CustomerServiceIcon.tsx'),
  ),
  AndroidIcon: dynamic(() => import('../icons/AndroidIcon.tsx')),
  AppleIcon: dynamic(() => import('../icons/AppleIcon.tsx')),
};

const UseReasonsSection = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(
      '#index_useReasons .cards_container article p',
    );
    let h = 0;

    cards.forEach((card) => {
      if (h < (card as HTMLElement).offsetHeight)
        h = (card as HTMLElement).offsetHeight;
    });

    cards.forEach((card) => {
      (card as HTMLElement).style.height = h + 'px';
    });
  }, []);

  return (
    <section id="index_useReasons" className="px-3">
      <div className="text_container text-center px-5 mb-5">
        <h2 className="section_header mb-3 mx-auto col-lg-8">
          {useReasonsData.title}
        </h2>
        <p className="m-0 mx-auto col-lg-8">{useReasonsData.text}</p>
      </div>

      <div className="cards_container d-flex flex-column flex-md-row gap-3 justify-content-md-center">
        {useReasonsData.items.map((item, index) => (
          <article
            key={'reasonCard_' + index}
            id={'reasonCard_' + index}
            className="p-3 col-8 col-md-3 col-xl-2 bg-white d-flex flex-column justify-content-between rounded-4 mx-auto mx-md-0"
          >
            {item.icon.length < 2 ? (
              item.icon.map((icon, index) => {
                const IconComponent = icons[icon + 'Icon'];
                return (
                  <IconComponent
                    colour="black"
                    size="xlarge"
                    isGradient
                    key={'icon_' + index}
                  />
                );
              })
            ) : (
              <div className={`${styles.overlapping_icons}`}>
                {item.icon.map((icon, index) => {
                  const IconComponent = icons[icon + 'Icon'];
                  return (
                    <IconComponent
                      colour="black"
                      size="xlarge"
                      isGradient
                      key={'icon_' + index}
                    />
                  );
                })}
              </div>
            )}

            <p className="m-0 mt-3">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default UseReasonsSection;
