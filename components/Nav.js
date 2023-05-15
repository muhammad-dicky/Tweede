import NavItem from "./NavItem"

export default function Nav() {
    return (
        <ul className="hidden lg:flex justify-end space-x-9 px-7">
            <a href="#"><NavItem>Home</NavItem></a>
            <a href="about"><NavItem>Tentang Kami</NavItem></a>
            <a href="#"><NavItem>Layanan</NavItem></a>
            <a href="#"><NavItem>Ulasan</NavItem></a>
        </ul>
    )
}
