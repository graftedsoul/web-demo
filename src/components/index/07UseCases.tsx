import { useCasesData } from '@/data/index/07_usecases.js';
import Carousel from '../shared/Carousel';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { ComponentType } from 'react';
import { SVGProps } from '@/utils/SVGProps.ts';

const icons: { [key: string]: ComponentType<SVGProps> } = {
  MoneyDollarBoxIcon: dynamic(() => import('../icons/MoneyDollarBoxIcon.tsx')),
  ShoppingCartIcon: dynamic(() => import('../icons/ShoppingCartIcon.tsx')),
  FirstAidKitIcon: dynamic(() => import('../icons/FirstAidKitIcon.tsx')),
  ShipIcon: dynamic(() => import('../icons/ShipIcon.tsx')),
  BriefcaseIcon: dynamic(() => import('../icons/BriefcaseIcon.tsx')),
  BitcoinIcon: dynamic(() => import('../icons/BitcoinIcon.tsx')),
  ExternalLinkIcon: dynamic(() => import('../icons/ExternalLinkIcon.tsx')),
};

function getIcon(
  icon: string,
  size: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge',
  colour:
    | 'blue'
    | 'green'
    | 'yellow'
    | 'orange'
    | 'pink'
    | 'purple'
    | 'black'
    | 'grey'
    | 'white',
  isGradient: boolean,
) {
  const IconComponent = icons[icon + 'Icon'];
  return <IconComponent size={size} colour={colour} isGradient={isGradient} />;
}

const UseCasesSection = () => {
  return (
    <section id="index_useCases" className="px-3 px-md-6 px-xl-8">
      <div className="text_container mb-5">
        <h2 className="section_header">{useCasesData.title}</h2>
      </div>

      <div className="m-0 p-0 d-block">
        <Carousel slides={useCasesData.items} iconSet={icons} />
      </div>

      {/* <div className="d-none d-xl-flex mw-100 row row-cols-3 justify-content-center column-gap-3">
        {useCasesData.items.map((item, index) => (
          <>
            <article
              key={'useCaseDataArticle_' + index}
              className={`col col-3 mb-3 d-flex flex-column justify-content-between p-3 rounded-4 border position-relative overflow-hidden`}
            >
              <div className="content_container">
                <div className="icon_container ms-n1 mb-3">
                  {getIcon(item.icon, 'large', 'blue', true)}
                </div>

                <div className="text_container">
                  <h3 className={`card_header mb-3`}>{item.title}</h3>

                  <ul className={`list-unstyled d-flex flex-column gap-2`}>
                    {item.text.map((textItem, index) => (
                      <li
                        key={'listItem_' + index}
                        id={'listItem_' + index}
                        className="d-flex"
                      >
                        <div className="me-2 text-primary">&#9702;</div>
                        {textItem}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="button_container mt-3 mx-auto">
                <Link href={item.button.buttonUrl} className="btn btn-primary">
                  {item.button.buttonText}

                  <div className="icon_container d-inline-block align-middle ms-3 mt-1">
                    {getIcon(item.button.buttonIcon, 'xsmall', 'white', false)}
                  </div>
                </Link>
              </div>
            </article>

            {index === useCasesData.items.length / 2 - 1 && (
              <div className="w-100"></div>
            )}
          </>
        ))}
      </div> */}
    </section>
  );
};

export default UseCasesSection;
