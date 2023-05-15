export default function Button({ children, onClick, className }) {
    return (
        <a
            href="#"
            className="bg-ijo-lumut text-white py-3 px-6 rounded-full font-semibold inline-block transition-all duration-300 hover:bg-ijo-transparant hover:text-ijo-lumut hidden sm:inline-block"
        >
            {children}
        </a>
    )
}
