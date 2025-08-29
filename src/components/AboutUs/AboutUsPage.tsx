import { useTranslation } from 'react-i18next';
import './AboutUsPage.css';

function AboutUsPage() {
    const translate = useTranslation().t;
    
    return (
      <div className="about-us-container">
        <h1 className='h1-nuvotek'>{translate("about_us_title_1")}</h1>
        <h3>{translate("about_us_subtitle_1")}</h3>
        <div>
          {translate("about_us_par_1")}
        </div>
        <h1 className='h1-nuvotek'>{translate("about_us_title_2")}</h1>
        <div>
          {translate("about_us_par_2")}
        </div>
        <div>
          {translate("about_us_par_3")}
        </div>
        <div>
          {translate("about_us_par_4")}
        </div>
        <div>
          {translate("about_us_par_5")}
        </div>
        <div>
          {translate("about_us_par_6")}
        </div>
        <div className="separator"/>
        <h1 className='h1-nuvotek'>{translate("about_us_title_3")}</h1>
        <div className='team-info-section'>
          <div className='team-info-section-image-with-caption'>
            <img src='./team_cristina_stanescu.jpg' alt='team-cristina-stanescu'/>
            <div>Cristina Stănescu #NVK01</div>
          </div>
          <div className='team-info-section-text-body'>
            <div>
              {translate("about_us_par_7")}
            </div>
            <div>
              {translate("about_us_par_8")}
            </div>
            <div>
              {translate("about_us_par_9")}
            </div>
            <div>
              {translate("about_us_par_10")}
            </div>
            <div>
              {translate("about_us_par_11")}
            </div>
          </div>
        </div>
        <div className='team-info-section'>
          <div className='team-info-section-text-body'>
            {translate("about_us_par_12")}
          </div>
          <div className='team-info-section-image-with-caption'>
            <img src='./team_victor_stanescu.jpg' alt='team-victor-stanescu'/>
            <div>Victor Stănescu</div>
          </div>
        </div>
        <div className="separator"/>
        <h1 className='h1-nuvotek'>{translate("about_us_title_4")}</h1>
        <div className='team-info-section'>
          <div className='team-info-section-image-with-caption'>
            <img src='./team_adriana_tomeci.jpg' alt='team-adriana-tomeci'/>
            <div>Adriana Tomeci #NVK02</div>
          </div>
          <div className='team-info-section-text-body'>
            <div>
              {translate("about_us_par_13")}
            </div>
            <div>
              {translate("about_us_par_14")}
            </div>
            <div>
              {translate("about_us_par_15")}
            </div>
            <div>
              {translate("about_us_par_16")}
            </div>
          </div>
        </div>
        <div className='team-info-section'>
          <div className='team-info-section-text-body'>
            <div>
              {translate("about_us_par_17")}
            </div>
            <div>
              {translate("about_us_par_18")}
            </div>
            <div>
              {translate("about_us_par_19")}
            </div>
          </div>
          <div className='team-info-section-image-with-caption'>
            <img src='./team_daria_parvu.jpg' alt='team-daria-parvu'/>
            <div>Daria Pârvu</div>
          </div>
        </div>
        <div className='team-info-section'>
          <div className='team-info-section-image-with-caption'>
            <img src='./team_andreea_dima.jpg' alt='team-andreea-dima'/>
            <div>Andreea Dima</div>
          </div>
          <div className='team-info-section-text-body'>
            <div>
              {translate("about_us_par_20")}
            </div>
            <div>
              {translate("about_us_par_21")}
            </div>
            <div>
              {translate("about_us_par_22")}
            </div>
            <div>
              {translate("about_us_par_23")}
            </div>
          </div>
        </div>
        <div className='team-info-section'>
          <div className='team-info-section-text-body'>
            <div>
              {translate("about_us_par_24")}
            </div>
            <div>
              {translate("about_us_par_25")}
            </div>
            <div>
              {translate("about_us_par_26")}
            </div>
          </div>
          <div className='team-info-section-image-with-caption'>
            <img src='./team_larisa_constantin.jpg' alt='team-larisa-constantin'/>
            <div>Larisa Constantin</div>
          </div>
        </div>
        <div className='team-info-section'>
          <div className='team-info-section-image-with-caption'>
            <img src='./team_andreea_bunea.jpeg' alt='team-andreea-bunea'/>
            <div>Andreea Bunea</div>
          </div>
          <div className='team-info-section-text-body'>
            <div>
              {translate("about_us_par_27")}
            </div>
            <div>
              {translate("about_us_par_28")}
            </div>
            <div>
              {translate("about_us_par_29")}
            </div>
          </div>
        </div>
        <div className='team-info-section'>
          <div className='team-info-section-text-body'>
            <div>
              {translate("about_us_par_30")}
            </div>
            <div>
              {translate("about_us_par_31")}
            </div>
            <div>
              {translate("about_us_par_32")}
            </div>
          </div>
          <div className='team-info-section-image-with-caption'>
            <img src='./team_alex_duta.jpeg' alt='team-alex-duta'/>
            <div>Alex Duță</div>
          </div>
        </div>
      </div>
    );
  }
  
  export default AboutUsPage;
  