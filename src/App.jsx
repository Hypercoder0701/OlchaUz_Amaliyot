import { useDebugValue, useEffect, useRef } from "react";
import "./App.css";
import Katalog from "./Katalog";
import Links from "./Links";
import SearchBar from "./SearchBar";

function App() {
  const firstHorizontalSwiperRef = useRef(null);

  useEffect(() => {
    const firstHorizontalSwiperContainer = firstHorizontalSwiperRef.current;
    const params = {
      navigation: true,
      pagination: true,
      autoplay: true,
      loop: true,

      injectStyles: [
        `
          .swiper-button-next,
          .swiper-button-prev {
            background-color: white;
            background-position: center;
            width: 8px;
            height:24px;
            background-repeat: no-repeat;
            padding: 8px 16px;
            border-radius: 100%;
            color: red;
          }

          .swiper-button-prev {
            background-image: url("/box-arrow-in-left.svg");
          }

          .swiper-button-next {
            background-image: url("/box-arrow-in-right.svg");
          }
          
          .swiper-button-next::after,
          .swiper-button-prev::after {
            content: "";
          }

          .swiper-pagination-bullet{
            background-color: red;
          }
      `,
      ],
    };

    Object.assign(firstHorizontalSwiperContainer, params);
    firstHorizontalSwiperContainer.initialize();
  }, []);

  return (
    <div className="main-container">
      <div className="container">
        <img src="logo.png" alt="" width={102} />
        <Katalog />
        <SearchBar />
        <Links />
      </div>

      <div className="horizontal-swipers">
        <div className="first-horizontal-swiper">
          <swiper-container ref={firstHorizontalSwiperRef} init="false">
            <swiper-slide>
              <img src="first-hr-sw-img01.jpg" alt="" />
            </swiper-slide>
            <swiper-slide>
              <img src="first-hr-sw-img02.jpg" alt="" />
            </swiper-slide>
            <swiper-slide>
              <img src="first-hr-sw-img03.jpg" alt="" />
            </swiper-slide>
            <swiper-slide>
              <img src="first-hr-sw-img04.jpg" alt="" />
            </swiper-slide>
            <swiper-slide>
              <img src="first-hr-sw-img05.jpg" alt="" />
            </swiper-slide>
            <swiper-slide>
              <img src="first-hr-sw-img06.jpg" alt="" />
            </swiper-slide>
          </swiper-container>
        </div>

        <div className="second-horizontal-swiper">
          <span>Kun mahsuloti</span>
          <swiper-container>
            <swiper-slide>
              <img src="second-hr-sw-img01.jpg" alt="" />
              <div className="description">
                <span className="product-name">Honor X6a Black 4/128 GB </span>
                <span className="product-price">
                  1 839 600 so'm <span>2 199 000 so'm</span>
                </span>
                <span className="product-deadline">238 000 so'm x 12 oy</span>
              </div>
            </swiper-slide>
            <swiper-slide>
              <img src="second-hr-sw-img02.jpg" alt="" />
              <div className="description">
                <span className="product-name">Ayol tanasi SS24WES-21114 </span>
                <span className="product-price">
                  150 000 so'm <span>200 000 so'm</span>
                </span>
                <span className="product-deadline">20 000 so'm x 12 oy</span>
              </div>
            </swiper-slide>
          </swiper-container>
        </div>
      </div>
    </div>
  );
}

export default App;
