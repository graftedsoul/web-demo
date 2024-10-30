import { verificationStepsData } from '@/data/index/05_verificationsteps.js';
import Carousel from '../shared/Carousel';

const VerificationStepsSection = () => {
  return (
    <section id="index_verificationSteps" className="px-3 px-md-6 px-xl-8">
      <div className="text_container mb-5">
        <h2 className="section_header">{verificationStepsData.title}</h2>
      </div>

      <Carousel slides={verificationStepsData.items} />
    </section>
  );
};

export default VerificationStepsSection;
