"use client";
import { useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import { SwiperNavButtons } from '@/components/SwiperNavButton';
// Import Swiper styles
import 'swiper/css';


export default function RadioTabs() {
    SwiperCore.use([Autoplay]);


    const directions = [
        {
            id: 'radio-tab-direction-e',
            value: "Menampilkan jendela video pembeli dengan penjual untuk melihat kondisi barang yang lebih spesifik dan nyata, sehingga mencapai kesepakatan terbaik. Ayo, Hubungi penjual dan pastikan produk anda tetap dalam kualitas baik sesuai dengan keinginan anda.",
            label: "Video Call",
        },
        {
            id: 'radio-tab-direction-w',
            value: "Membagikan lokasi pengiriman barang terkini dan real-time serta mempermudah dalam segi pengawasan secara mandiri.",
            label: "Easy Tracking",
        },
        {
            id: 'radio-tab-direction-n',
            value: 'Dapat melakukan pengembalian dana 100% dengan mudah dan terpercaya.',
            label: "Easy Refund",
        },
    ];

    const [selectedDirection, setSelectedDirection] = useState(directions[0].value);
    const [swiperInstance, setSwiperInstance] = useState(null);

    useEffect(() => {
        if (swiperInstance) {
            const activeIndex = directions.findIndex(direction => direction.value === selectedDirection);
            swiperInstance.slideTo(activeIndex);
        }
    }, [selectedDirection, swiperInstance]);

    const handleDirectionChange = (event) => {
        setSelectedDirection(event.target.value);
    };

    return (
        <>

            {/* layanan terbaik */}
            <div className='bg-gradient-to-r from-ijo-transparant via-ijo-transparant py-20'>
                <div className='flex justify-center text-4xl font-bold font-poppins text-ijo-lumut mb-10'>
                    <h1>Layanan Terbaik</h1>
                </div>
                <div className=" flex items-center justify-center">
                    <div className="">
                        <div className='flex justify-center items-center'>
                            <div className="">
                                <div className="inline-flex p-1 pr-0 bg-white rounded-full overflow-hidden">
                                    {directions.map((radio) => (
                                        <label
                                            key={radio.id}
                                            htmlFor={radio.id}
                                            className={`block px-9 py-3 rounded-full cursor-pointer hover:bg-ijo-lumut hover:text-white mr-1 ${selectedDirection === radio.value ? 'bg-ijo-lumut text-white' : ''}`}
                                        >
                                            <input
                                                type="radio"
                                                className="hidden"
                                                id={radio.id}
                                                value={radio.value}
                                                name="direction"
                                                checked={selectedDirection === radio.value}
                                                onChange={handleDirectionChange}
                                            />
                                            <div>{radio.label}</div>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* <span className="text-ijo-lumut font-bold text-2xl text-right">{selectedDirection}</span> */}
                    </div>
                </div>
            </div>

            <section className='bg-gradient-to-r from-ijo-transparant via-ijo-transparant'>
                <div className="container mx-auto ">
                    {/* <h1 className='text-ijo-lumut text-bold text-5xl font-poppins justify-center flex '>Layanan Terbaik</h1> */}
                    <Swiper
                        modules={Navigation}
                        spaceBetween={50}
                        slidesPerView={1}
                        loop={true}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => setSwiperInstance(swiper)}
                    >
                        {directions.map((direction) => (
                            <SwiperSlide className='container mx-auto' key={direction.id}>
                                <div className='flex items-center justify-center'>
                                    <div className='flex flex-col mr-20 w-4/12'>
                                        <h1 className='text-semibold text-ijo-lumut text-4xl mb-2 font-poppins text-right'>{direction.label}</h1>
                                        <p className='text-black font-poppins text-right'>{direction.value}</p>
                                    </div>
                                    <div className=''>
                                        <img src={`/hp-slider${direction.id.split('-')[3]}.png`} className='' alt={`Gambar-${direction.id.split('-')[3]}`}></img>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    )

}