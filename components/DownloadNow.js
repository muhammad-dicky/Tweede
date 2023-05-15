// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import { SwiperNavButtons } from '@/components/SwiperNavButton';
// Import Swiper styles
import 'swiper/css';



export default function DownloadNow() {
    return (
        <div className='flex justify-center items-center mt-10'>
            <div className="container mx-auto">
                <div className="flex py-5 items-center">
                    <div className="w-6/12 text-lg font-semibold mx-auto">
                        <h1 className="text-xl font-poppins font-bold text-ijo-lumut">
                            Yuk, Download Sekarang!
                        </h1>
                        <p className="text-sm py-5">
                            Mau bergaya dengan harga terjangkau? Yuk, temukan barang bekas yang kamu butuhkan di TWEDEE!
                        </p>
                        <div className="flex">
                            <a
                                href="/link-googleplay"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-3/12 mr-2 hover:scale-110 transform transition"
                            >
                                <img src="/googleplay.png" className="w-full" alt="Google Play" />
                            </a>
                            <a
                                href="/link-appstore"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-3/12 hover:scale-110 transform transition"
                            >
                                <img src="/appstore.png" className="w-full" alt="App Store" />
                            </a>
                        </div>
                    </div>
                    <div className="w-3/12 text-lg font-semibold mx-auto ">
                        <img src='/tangan.png' className='' />
                    </div>
                </div>
            </div>
        </div>
    )
}