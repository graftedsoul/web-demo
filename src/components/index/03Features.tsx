'use client';

import { featuresData } from '@/data/index/03_features.js';
import LargeCard from '../shared/LargeCard';
import { useEffect } from 'react';

const FeaturesSection = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('article.large_card');
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
    <section id="index_features" className="px-2 px-xl-3">
      <div className="row g-2">
        {featuresData.map((feature, index) => (
          <div className="col-12 col-md-6" key={'feature_' + index}>
            <LargeCard
              title={feature.title}
              text={feature.text}
              image={feature.image}
              backgroundType={feature.backgroundType}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
