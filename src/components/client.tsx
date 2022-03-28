import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Pagination, Navigation } from "swiper";
import Cards from './cards';
import { Rating } from 'react-simple-star-rating'
import WithPet1 from '../assets/img/henru.jpg'
import WithPet2 from '../assets/img/PEQthBVe-image-via-youtube.jpg'
import WithPet3 from '../assets/img/womencat.jpg'
import WithPet4 from '../assets/img/womenWithcat.jpg'
import WithPet5 from '../assets/img/manwithdog.jpg'
export default function Client() {
    return (
        <section className='my-container' id='section--5'>

            <i className="fa-solid fa-paw sliderPaw1"></i>

            <i className="fa-solid fa-paw sliderPaw2"></i>

            <i className="fa-solid fa-paw sliderPaw3"></i>

            <i className="fa-solid fa-paw sliderPaw4"></i>
            <header>
                <h1>Why choose us</h1>
                <p>What our client say</p>
            </header>
            <main>

                <Swiper
                    pagination={{
                        type: "progressbar",
                        progressbarFillClass: "my-progressbar-fill",
                        horizontalClass: 'my-h-progressbar',


                    }}

                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="my-swiper"
                    speed={1045}
                    allowTouchMove={false}
                    draggable={false}

                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        }
                    }}
                    lazy={true}
                // wrapperClass="my-wrapper"
                ><p></p>
                    <SwiperSlide>
                        <Cards imgSrc={WithPet1 as string} h1='Thomas Fisher' p='Excellent clinic, Competent spicalists, inside is clean, there is new equipment and freshly renovated i have no doubts about the quality of services' HtmlElement={
                            <Rating ratingValue={399} allowHover={true} fillColor='gold' allowHalfIcon={true} transition={true} size={'clamp(2rem , 2vw , 2vw)' as string & number}></Rating>
                        } />
                    </SwiperSlide> <SwiperSlide>
                        <Cards imgSrc={WithPet4 as string} h1='Caroline Simmons' p='very caring doctors who go the extra mile i always refer here thr price is acceptable , i love this place Thanks ' HtmlElement={<Rating ratingValue={79} allowHover={true} fillColor='gold' allowHalfIcon={true} transition={true} size={'clamp(2rem , 2vw , 2vw)' as string & number}></Rating>

                        } />
                    </SwiperSlide> <SwiperSlide>
                        <Cards imgSrc={WithPet3 as string} h1='Mary Jordan' p='saying thanl you not enough! We sincerely thank the entire staff of the iPet verterinary clinic which employs highly qualified doctors' HtmlElement={<Rating ratingValue={99} allowHover={true} fillColor='gold' allowHalfIcon={true} transition={true} size={'clamp(2rem , 2vw , 2vw)' as string & number}></Rating>

                        } />
                    </SwiperSlide> <SwiperSlide>
                        <Cards imgSrc={WithPet2 as string} h1='henry moseley' p='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores maxime cumque, in ex et quasi quis animi magni neque ducimus!' HtmlElement={<Rating ratingValue={69} allowHover={true} fillColor='gold' allowHalfIcon={true} transition={true} size={'clamp(2rem , 2vw , 2vw)' as string & number}></Rating>

                        } />
                    </SwiperSlide> <SwiperSlide>
                        <Cards imgSrc={WithPet5 as string} h1='aron ralston' p='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores maxime cumque, in ex et quasi quis animi magni neque ducimus!' HtmlElement={<Rating ratingValue={399} allowHover={true} fillColor='gold' allowHalfIcon={true} transition={true} size={'clamp(2rem , 2vw , 2vw)' as string & number}></Rating>

                        } />
                    </SwiperSlide>



                </Swiper>


            </main>
        </section>
    )
}
