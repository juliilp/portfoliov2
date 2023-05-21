import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Navigation } from "swiper";
import { sliderSettings } from "../../utils/common";
import Card from "../Card/Card";
import "./Carrousel.css";
import data from "../../utils/data";
export default function Carrousel() {
  return (
    <div>
      <Swiper
        {...sliderSettings}
        loop={false}
        pagination={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.map((e, i) => (
          <div id={i} className="card-carrousel">
            <SwiperSlide key={i}>
              <div className="card-container-externo">
                <Card titulo={e.name} textoMenu={e.texto} image={e.imagen} />
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
}
