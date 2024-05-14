import React from 'react';
import { useTranslation } from 'react-i18next';
import TranslationEngtoHindi from '../components/TranslationEngToHin';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };

  const handleSearch = () => {
    console.log('Search performed');
  };

  return (
    <>
      <div className="container-fluid bg-dark pt-1 d-lg-block d-sm-none d-none">
        <div className="row py-1">
          <div className="col-md-5 col-lg-6 text-white">
            <div className="swiper mtext">
              <div className="swiper-wrapper pt-1">
                <div className="swiper-slide bg-dark">
                  <a href="#" className="marquee-text" target="_blank">{t('Home')}</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4">
            <div className="text-end text-white d-lg-block d-sm-none d-none">
              <a href="#nav" className="text-white">Skip to navigation</a> |
              <a href="#content" className="text-white">Skip to main content</a> | 
              <button onClick={() => handleLanguageChange('hi')} id="hi" className="NALOC text-white" style={{ "--bs-btn-padding-y": ".25rem", "--bs-btn-padding-x": ".5rem", "--bs-btn-font-size": ".75rem" }}>{t('Hindi')}</button>
            </div>
          </div>
          <div className="col-md-3 col-lg-2">
            <div className="input-group float-end">
              <div id="search-autocomplete" className="form-outline">
                <input className="form-control form-control-sm" id="searchTerm" type="search" placeholder={t('Search')} autoComplete="off" aria-label={t('Search')} />
              </div>
              <button type="button" id="btnSearch" className="btn btn-dark btn-sm" onClick={handleSearch}>
                <i className="fas fa-search p-0"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <TranslationEngtoHindi />
    </>
  );
};

export default Navbar;
