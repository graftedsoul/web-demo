import { referencesData } from '@/data/index/02_references.js';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { horizontalLoop } from '@/utils/gsapHelperFunctions.js';
import Image from 'next/image';

// TODO: make infinite scrolling carousel into a component

const ReferencesSection = () => {
  useGSAP(() => {
    const refs = gsap.utils.toArray('#index_references .scroll_item');
    const loop = horizontalLoop(refs, {
      paused: true,
      repeat: -1,
      speed: 0.25,
    });
    loop.play();
  });

  return (
    <section id="index_references" className="my-n6">
      <div className="scroll_track d-flex flex-nowrap overflow-hidden d-md-none">
        {referencesData.map((ref, index) => (
          <div
            className="scroll_item px-2 flex-shrink-0"
            key={'referenceScroll_' + index}
            id={'referenceScroll_' + index}
          >
            <div
              className="image_container position-relative"
              style={{ width: '100px', height: '40px' }}
            >
              <Image
                src={ref.imageUrl}
                alt={ref.imageAlt}
                fill
                sizes="200px"
                className="object-fit-contain image_grayscale opacity-25"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="d-none d-md-flex justify-content-center px-6 row container-lg px-lg-3 px-xl-8 px-xxl-0 mx-lg-auto">
        {referencesData.map((ref, index) => (
          <div
            className="col"
            key={'referenceStatic_' + index}
            id={'referenceStatic_' + index}
          >
            <Image
              src={ref.imageUrl}
              alt={ref.imageAlt}
              width={0}
              height={0}
              sizes="100vw"
              className="image_autosize image_grayscale opacity-25"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReferencesSection;
