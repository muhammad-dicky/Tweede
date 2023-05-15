export default function NavItem({ children }) {

    return (

        <li className="relative">
            <a
                href="#"
                className="text-gray text-sm opacity-60 font-semibold transition-opacity duration-300 hover:opacity-100"
            >
                {children}
            </a>
        </li>


    );

}