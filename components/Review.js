// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import { SwiperNavButtons } from '@/components/SwiperNavButton';
// Import Swiper styles
import 'swiper/css';

export default function Review() {
    return (

        <div className='bg-gradient-to-r from-pink via-ijo-transparant py-20 mt-11'>
            <Swiper
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}

            >
                <SwiperSlide>
                    <div className='container mx-auto '>
                        <div className='flex justify-center text-4xl font-bold font-poppins text-ijo-lumut mt-20 mb-10'>
                            <div className='flex flex-col items-center'>
                                <h1>Cerita Pengguna</h1>
                                <img src='/profile-1.png' className='flex justify-center mt-10'></img>
                                <p className='font-poppins text-semibold text-black text-xl mt-3'>Agus Kotak</p>
                                <img src='/star.png' className='mt-2 flex justify-center'></img>
                                <p className=' text-black text-sm mt-3 flex justify-center px-20 text-center'>“Masih pilihan nomor satu saya untuk belanja online. Harga bersaing, gratis ongkos kirim, dan masih banyak lagi. Semoga tim pengembang bisa membuatnya lebih stabil dan ringan untuk perangkat kelas bawah. Tapi kalian baik-baik saja, terima kasih!”</p>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='container mx-auto'>
                        <div className='flex justify-center text-4xl font-bold font-poppins text-ijo-lumut mt-20 mb-10'>
                            <div className='flex flex-col items-center'>
                                <h1>Cerita Pengguna</h1>
                                <img src='/profile-2.png' className='flex justify-center mt-10'></img>
                                <p className='font-poppins text-semibold text-black text-xl mt-3'>Elsa Maharani</p>
                                <img src='/star.png' className='mt-2 flex justify-center'></img>
                                <p className=' text-black text-sm mt-3 flex justify-center px-20 text-center'>“sangat simple proses transaksinya, dan juga didukung fitur refund pada aplikasi ini”</p>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>

            </Swiper>
        </div>
    )
}