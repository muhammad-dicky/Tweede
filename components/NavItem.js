import Link from 'next/link';

export default function NavItem({ children, href }) {
    return (
        <li className="relative">

            <a className="text-gray text-sm opacity-60 font-semibold transition-opacity duration-300 hover:opacity-100">
                {children}
            </a>

        </li>
    );
}
