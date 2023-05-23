import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { sliderSettings } from "../../utils/common";
import Card from "../Card/Card";
import "./Carrousel.css";
import data from "../../utils/data";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
export default function Carrousel() {
  return (
    <div>
      <Swiper
        {...sliderSettings}
        cssMode={true}
        pagination={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        className="mySwiper"
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      >
        {data.map((e, i) => (
          <div id={i} className="card-carrousel">
            <SwiperSlide key={i}>
              <div className="card-container-externo">
                <Card
                  titulo={e.name}
                  textoMenu={e.texto}
                  image={e.imagen}
                  web={e.web}
                  github={e.github}
                />
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
}
