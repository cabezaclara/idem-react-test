import React, {useRef} from "react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Navigation } from "swiper";
import Banner from "../../ui/banner/banner";
import NavButton from "../../ui/nav-button/nav-button";
import { StyledBannerSection, StyledSwiper, Controls } from "./styles";

function BannersSlider({ banners }) {
  SwiperCore.use([Navigation]);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <StyledBannerSection>
      {banners?.length ? (
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
          slidesPerView={1}
          spaceBetween={30}
        >
          {banners &&
          banners.length &&
          banners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <Banner
                {...banner}
              />
            </SwiperSlide>
          ))}
        </StyledSwiper>
      ) : null}
      <Controls>
        <NavButton left ref={navigationPrevRef} title="Назад"></NavButton>
        <NavButton ref={navigationNextRef} title="Вперед"></NavButton>
      </Controls>
    </StyledBannerSection>
  );
};

export default BannersSlider;