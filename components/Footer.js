import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaMailBulk, FaPhone, FaPhoneVolume } from 'react-icons/fa';

export default function Footer() {
    return (

        <footer className="bg-ijo-lumut py-20">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center mb-8 md:mb-0">
                    <img src="/logo-white.png" alt="Logo" className="" />

                </div>
                <div className="flex flex-col md:flex-row">


                    <div className="ml-8 w-full md:w-3/12">
                        <h4 className="font-bold text-base font-poppins text-white">Social Media</h4>
                        <ul className="flex flex-col   space-y-3 justify-start">
                            <li className="flex items-center">
                                <a
                                    href="/link-facebook"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-gray-900 flex items-center"
                                >
                                    <FaFacebook className="w-6 h-6 mr-2" />
                                    <span className='text-sm'>Facebook</span>
                                </a>
                            </li>
                            <li className="flex items-center">
                                <a
                                    href="/link-instagram"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-gray-900 flex items-center"
                                >
                                    <FaInstagram className="w-6 h-6 mr-2" />
                                    <span className='text-sm'>Instagram</span>
                                </a>
                            </li>
                            <li className="flex items-center">
                                <a
                                    href="/link-twitter"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-gray-900 flex items-center"
                                >
                                    <FaTwitter className="w-6 h-6 mr-2" />
                                    <span className='text-sm'>Twitter</span>
                                </a>
                            </li>
                        </ul>
                    </div>




                    <div className="ml-8 md:ml-20 text-white w-full md:w-3/12">
                        <h4 className="font-bold text-base">Jelajahi Tweede</h4>
                        <p className="mt-2 text-sm  hover:text-gray-900">Home</p>
                        <p className="mt-2 text-sm  hover:text-gray-900">Tentang kami</p>
                        <p className="mt-2 text-sm  hover:text-gray-900">Layanan</p>
                    </div>



                    <div className="ml-8 md:ml-20 w-full md:w-7/12">
                        <h4 className="font-bold text-base font-poppins text-white">Kontak Kami</h4>
                        <ul className="flex flex-col   space-y-3 justify-start">
                            <li className="flex items-center">
                                <a
                                    href="/link-facebook"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-gray-900 flex items-center"
                                >
                                    <FaMapMarkerAlt className="w-6 h-6 mr-2" />
                                    <span className='text-sm'>Tweede Tower Ciputra World 2,<p />
                                        Jl. Prof. DR. Satrio No.3, Kota Jakarta<p /> Selatan, Daerah Khusus Ibukota Jakarta 12950</span>
                                </a>
                            </li>
                            <li className="flex items-center">
                                <a
                                    href="/link-instagram"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-gray-900 flex items-center"
                                >
                                    <FaMailBulk className="w-6 h-6 mr-2" />
                                    <span className='text-sm'>Tweede@business.com</span>
                                </a>
                            </li>
                            <li className="flex items-center">
                                <a
                                    href="/link-twitter"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-gray-900 flex items-center"
                                >
                                    <FaPhoneVolume className="w-6 h-6 mr-2" />
                                    <span className='text-sm'>35626-262-235</span>
                                </a>
                            </li>
                        </ul>
                    </div>




                </div>
            </div>
        </footer>
    )
}

