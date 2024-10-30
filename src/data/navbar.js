export const navbarData = {
  title: 'ŞipŞak Doğrula',
  logo: {
    logoImageAlt: 'logo',
    logoImageUrl: '/images/logo.png',
    logoUrl: '/',
  },
  links: [
    {
      linkText: 'Anasayfa',
      linkUrl: '/',
      dropdownItems: [],
    },
    {
      linkText: 'Hakkında',
      linkUrl: '',
      dropdownItems: [
        {
          dropdownText: 'Nedir',
          dropdownUrl: '/nedir',
        },
        {
          dropdownText: 'Nasıl Çalışır',
          dropdownUrl: '/nasil-calisir',
        },
        {
          dropdownText: 'Özellikler',
          dropdownUrl: '/ozellikler',
        },
      ],
    },
    {
      linkText: 'Sektörler',
      linkUrl: '',
      dropdownItems: [
        {
          dropdownText: 'Ödeme Kuruluşları',
          dropdownUrl: '/odeme-kurulusları',
        },
        {
          dropdownText: 'Elektronik Ticaret',
          dropdownUrl: '/elektronik-ticaret',
        },
        {
          dropdownText: 'Sağlık',
          dropdownUrl: '/saglik',
        },
        {
          dropdownText: 'Turizm',
          dropdownUrl: '/turizm',
        },
        {
          dropdownText: 'Kurum İçi İşlemler',
          dropdownUrl: '/kurum-ici-islemler',
        },
        {
          dropdownText: 'Kripto Borsası',
          dropdownUrl: '/kripto-borsasi',
        },
      ],
    },
    {
      linkText: 'İletişim',
      linkUrl: '/iletisim',
      dropdownItems: [],
    },
  ],
  buttons: [
    {
      buttonText: 'Şimdi Deneyin',
      buttonUrl: '/',
    },
  ],
};
