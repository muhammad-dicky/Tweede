export default function About() {
    return (
        <div className="container mx-auto" id="about">
            <div className="flex flex-col md:flex-row py-10 mx-auto">
                <div className="md:w-5/12 md:ml-20">
                    <img
                        src="/hp-1.png"
                        alt="Tweede"
                        className="w-full object-fit-contain mx-auto md:m-0"
                        style={{ maxWidth: '100%', padding: '0 1rem' }}
                    />
                </div>
                <div className="md:w-7/12 md:ml-10 mt-20 md:mt-20 text-center md:text-left">
                    <h1 className="text-4xl font-bold text-ijo-lumut justify-center md:justify-start font-poppins">
                        Apa itu Tweede?
                    </h1>
                    <div className="py-7 font-poppins text-center md:text-left">
                        Tweede Merupakan platform jual beli barang bekas yang berbasis mobile yang memungkinkan pelanggan untuk melakukan transaksi jual-beli barang bekas secara cepat dan mudah. Tweede juga memfasilitasi proses transaksi yang aman dan nyaman.
                    </div>
                    <a
                        href="/link-selengkapnya"
                        className="border border-ijo-lumut bg-ijo-muda py-3 px-6 rounded-xl text-ijo-lumut text-bold font-poppins hover:bg-ijo-lumut hover:text-white ml-0 md:ml-4"
                    >
                        Selengkapnya
                    </a>
                </div>
            </div>
        </div>
    );
}
