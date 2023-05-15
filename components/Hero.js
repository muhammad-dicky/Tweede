export default function Hero() {
    return (

        <div className='bg-scroll bg-hero-pattern h-full'>
            <div className='container mx-auto px-20'>
                <div className="flex py-20 items-center">
                    <div className='mt-20'>
                        <h1 className="text-4xl font-bold text-white font-poppins mt-10">Temukan Barang Bekas
                            <div>
                                Gaya Berkelas</div></h1>
                        <div className='mt-5 text-white'>Temukan barang bekas yang kamu butuhkan,<div>
                            dan rasakan keajaibannya! Mau bergaya dengan harga terjangkau?</div>
                            yuk, temukan barang bekas yang kamu butuhkan di TWEDEE!</div>
                        <section>
                            <div className="container mt-3">
                                <div className="flex">
                                    <div className="w-4/12">
                                        <a href="#">
                                            <img
                                                src="/googleplay.png"
                                                className="w-full transform transition-all duration-300 hover:scale-110"
                                            ></img>
                                        </a>
                                    </div>
                                    <div className="w-4/12 ml-6">
                                        <a href="#">
                                            <img
                                                src="/appstore.png"
                                                className="w-full transform transition-all duration-300 hover:scale-110"
                                            ></img>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    )
}