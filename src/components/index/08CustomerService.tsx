import { customerServiceData } from '@/data/index/08_customerservice.js';
import Image from 'next/image';

const CustomerServiceSection = () => {
  return (
    <section id="index_customerService" className="px-3 px-md-6 px-xl-8">
      <div className="text_container mb-5">
        <h2 className="section_header">{customerServiceData.title}</h2>
      </div>

      <div className="content_container d-flex flex-column flex-lg-row gap-3">
        <Image
          src={customerServiceData.image.imageUrl}
          alt={customerServiceData.image.imageAlt}
          width={0}
          height={0}
          sizes="100vw"
          className="image_autosize d-none d-md-block col-12 col-lg-5 mb-3 object-fit-cover"
        />

        <ul className="list-unstyled col-12 col-lg-6">
          {customerServiceData.items.map((item, index) => (
            <li
              key={'customerServiceListItem_' + index}
              id={'customerServiceListItem_' + index}
            >
              <h3 className="elevated_header mb-1">{item.title}</h3>
              <p className="mb-5">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CustomerServiceSection;
