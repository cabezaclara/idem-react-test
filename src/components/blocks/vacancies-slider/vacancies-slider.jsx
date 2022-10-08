import React, {useRef} from "react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Navigation } from "swiper";
import {StyledSwiper, StyledTitle, StyledSection, StyledControls} from "./styles";
import VacancyCard from "../../ui/vacancy-card/vacancy-card";
import { TitleLevel } from "../../ui/title/title";
import NavButton from "../../ui/nav-button/nav-button";

function VacansiesSlider({cards}) {
  SwiperCore.use([Navigation]);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <StyledSection>
      <StyledTitle level={TitleLevel.H2}>вакансии в гросс маркете</StyledTitle>
      <StyledControls>
        <NavButton left ref={navigationPrevRef} title="Назад"></NavButton>
        <NavButton ref={navigationNextRef} title="Вперед"></NavButton>
      </StyledControls>
      {cards?.length ? (
        <StyledSwiper
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
            disabledClass: 'disable'
          }}
          freeMode
          slidesPerView={1.5}
          spaceBetween={30}
          centeredSlides={true}
          grabCursor={true}
          breakpoints={{
            580: {
              slidesPerView: 2.25,
              spaceBetween: 30,
              centeredSlides: false,
            },
            768: {
              slidesPerView: 2.25,
              spaceBetween: 30,
              centeredSlides: false,
            },
            1110: {
              slidesPerView: 3.5,
              spaceBetween: 30,
              centeredSlides: false,
            },
            1440: {
              slidesPerView: 3.5,
              spaceBetween: 30,
              centeredSlides: false,
              mousewheel: false,
          }}}
        >
          {cards &&
          cards.length &&
          cards.map((card) => (
            <SwiperSlide key={card.id}>
              <VacancyCard
                {...card}
              />
            </SwiperSlide>
          ))}
        </StyledSwiper>
      ) : null}
    </StyledSection>
  );
}

export default VacansiesSlider;