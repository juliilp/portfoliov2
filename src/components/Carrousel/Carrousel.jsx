import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Navigation } from "swiper";
import { sliderSettings } from "../../utils/common";
import data from "../../utils/slider.json";
import Card from "../Card/Card";
import "./Carrousel.css";
export default function Carrousel() {
  return (
    <div>
      <Swiper
        {...sliderSettings}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((e, i) => (
          <div id={i} className="card-carrousel">
            <SwiperSlide key={i}>
              <div className="card-container-externo">
                <Card titulo={e.name} textoMenu={e.texto} />
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
}
