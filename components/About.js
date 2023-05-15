export default function About() {
    return (
        <div className='container mx-auto' id="about">
            <div className='flex py-20 mx-auto'>

                <div className='w-5/12 ml-20'>
                    <img src='/hp-1.png'></img>
                </div>
                <div className="w-7/12 ml-10">
                    <h1 className="text-4xl font-bold text-ijo-lumut justify-start font-poppins">
                        Apa itu Tweede?
                    </h1>
                    <div className="py-7 font-poppins">
                        Tweede Merupakan platform jual beli barang bekas yang berbasis mobile yang memungkinkan pelanggan untuk melakukan transaksi jual-beli barang bekas secara cepat dan mudah. Tweede juga memfasilitasi proses transaksi yang aman dan nyaman.
                    </div>
                    <a
                        href="/link-selengkapnya"
                        className="border border-ijo-lumut bg-ijo-muda py-3 px-6 rounded-xl text-ijo-lumut text-bold font-poppins hover:bg-ijo-lumut hover:text-white"
                    >
                        Selengkapnya
                    </a>
                </div>
            </div>

        </div>
    )
}