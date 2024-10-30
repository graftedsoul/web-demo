import { faqData } from '@/data/index/09_faq.js';
import { useEffect } from 'react';
// import { Collapse } from 'bootstrap';

const FAQSection = () => {
  useEffect(() => {
    /* const accordionCollapseElementList = document.querySelectorAll(
      '#faq_accordionContainer .accordion-collapse.collapse'
    );

    const accordionCollapseList: Collapse[] = [];

    accordionCollapseElementList.forEach((ac) => {
      const tempAc = new Collapse(ac, {
        toggle: false,
      });
      accordionCollapseList.push(tempAc);
    }); */

    // eslint will lose its mind over this but i don't know if i can use an import statement here
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <section id="index_faq" className="px-3 px-md-6 px-xl-8">
      <div className="px-5 pt-5 pb-2 rounded-4 bg-white">
        <div className="text_container">
          <h2 className="section_header text-center">{faqData.title}</h2>
        </div>

        <div
          id="faq_accordionContainer"
          className="accordion_container accordion accordion-flush"
        >
          {faqData.items.map((item, index) => (
            <article
              className="accordion_item accordion-item border-0"
              key={'faqAccordionItem_' + index}
              id={'faqAccordionItem_' + index}
            >
              <h3 className="accordion-header">
                <button
                  className={`accordion-button py-4
                    ${!(index === 0) && 'collapsed'}
                    elevated_header
                  `}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={'#faqAccordionCollapse_' + index}
                  aria-expanded={index === 0}
                  aria-controls={'faqAccordionCollapse_' + index}
                  style={{ boxShadow: 'none' }}
                >
                  {item.title}
                </button>
              </h3>

              <div
                id={'faqAccordionCollapse_' + index}
                className={`accordion-collapse collapse ${index === 0 ? ' show' : ''}`}
                data-bs-parent="#faq_accordionContainer"
              >
                <div className="accordion-body d-flex flex-column gap-3">
                  {item.text.map((text, index) => (
                    <p
                      className="accordion_text_item m-0"
                      id={'faqAccordionTextItem_' + index}
                      key={'faqAccordionTextItem_' + index}
                    >
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
