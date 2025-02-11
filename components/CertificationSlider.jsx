import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const certificationSlides = {
  slides: [
    {
      images: [
        {
          title: "CSS",
          path: "/qqq.jpg",
          link: "https://www.hackerrank.com/certificates/4dda767daebc",
        },
        {
          title: "Javasript",
          path: "/Javasript.png",
          link: "https://www.hackerrank.com/certificates/45ad497ef756",
        },
        {
          title: "React(Basic)",
          path: "/React.png",
          link: "https://www.hackerrank.com/certificates/24eec29d00c4",
        },
        {
          title: "SQL(Basic)",
          path: "/SQL(Basic).png",
          link: "https://www.hackerrank.com/certificates/7a719aadcc24",
        },
      ],
    },
    {
      images: [
        {
          title: "Java",
          path: "/Java.png",
          link: "https://www.hackerrank.com/certificates/373c43b05c5e",
        },
        {
          title: "RestApi",
          path: "/RestApi.png",
          link: "https://www.hackerrank.com/certificates/6351b579510b",
        },
        {
          title: "Golang",
          path: "/Golang.png",
          link: "https://www.hackerrank.com/certificates/fa35db56f8a4",
        },
        {
          title: "Python",
          path: "/Python.png",
          link: "https://www.hackerrank.com/certificates/4614606eeeb4",
        },
      ],
    },
  ],
};

const CertificationSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {certificationSlides.slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {slide.images.map((image, imageI) => (
              <div
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                key={imageI}
              >
                <div className="flex items-center justify-center relative overflow-hidden group">
                  {/* image */}
                  <Image
                    src={image.path}
                    alt={image.title}
                    width={300}
                    height={200}
                  />

                  {/* overlay gradient */}
                  <div
                    className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"
                    aria-hidden
                  />

                  {/* title */}
                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                    <Link
                      href={image.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]"
                    >
                      {/* title part 1 */}
                      <div className="delay-100">Visit</div>
                      {/* title part 2 */}
                      <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        
                      </div>
                      {/* icon */}
                      <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        <BsArrowRight aria-hidden />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CertificationSlider;
