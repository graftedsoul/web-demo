// import { contactData } from '@/data/index/10_contact.js';

import Image from 'next/image';

const ContactSection = () => {
  return (
    <section id="index_contact" className="px-3 px-md-6 px-xl-8">
      <div className="text_container mb-5 mx-xxl-auto">
        <h2 className="section_header">İletişime Geçin</h2>
      </div>

      <div className="d-flex flex-column flex-lg-row-reverse justify-content-end gap-5 gap-md-3">
        <form
          action=""
          className="contact_form d-flex flex-column gap-3 align-items-start col"
        >
          {/* Name Inputs */}
          <div className="col-12 d-flex flex-wrap gap-3">
            <div className="col-12 col-sm">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="index_contactInputName"
                  name="index_contactInputName"
                  placeholder="John"
                />
                <label htmlFor="index_contactInputName">İsim</label>
              </div>
            </div>

            <div className="col-12 col-sm">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="index_contactInputSurname"
                  name="index_contactInputSurname"
                  placeholder="John"
                />
                <label htmlFor="index_contactInputSurname">Soyisim</label>
              </div>
            </div>
          </div>

          {/* Email Input */}
          <div className="form-floating col-12">
            <input
              type="email"
              className="form-control"
              name="index_contactInputEmail"
              id="index_contactInputEmail"
              placeholder="john@example.com"
            />
            <label htmlFor="index_contactInputEmail">Email</label>
          </div>

          {/* Textarea Input */}
          <div className="form-floating col-12">
            <textarea
              name="index_contactInputMessage"
              id="index_contactInputMessage"
              className="form-control"
              style={{ height: '8rem' }}
              placeholder="Lorem ipsum solor sit amet..."
            ></textarea>
            <label htmlFor="index_contactInputMessage">Mesajınız</label>
          </div>

          {/* Button */}
          <button className="btn btn-primary" type="submit">
            Gönder
          </button>
        </form>

        {/* -- Map -- */}
        <div className="map_container col col-lg-7 d-flex flex-column gap-3">
          {/* TODO: Replace this placeholder image with an actual map plugin */}
          <div className="image_container">
            <Image
              src="/images/map.png"
              alt="map"
              width={0}
              height={0}
              sizes="100vw"
              className="object-fit-contain image_autosize"
            />
          </div>

          <span className="address text_small col-10 col-sm-8">
            Üniversiteler Mahallesi, Bilkent CyberPark, CyberPlaza A Blok Kat: 6
            No: 603 Çankaya / ANKARA
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
