// import logo from '/logo.svg'
// import cart from '../assets/icon-cart.svg'
// import profile from '../assets/image-avatar.png';
import Link from 'next/link';

const Navbar = () => {
    return(
        <div className='navbar py-6'>
            <div className="nav--header">
                <header className="logo">
                    <Link href="/"><img className="cursor-pointer" src="/logo.svg" alt="logo" /></Link>
                </header>
                <nav className="nav--links">
                    <img src="/icon-menu.svg" className='mobile--toggler' alt="" />
                    <ul className="link--container flex align-center gap-8">
                        <li>
                            <Link className="link" href="/collections">Collections</Link>
                        </li>
                        <li>
                            <Link className="link" href="/men">Men</Link>
                        </li>
                        <li>
                            <Link className="link" href="/women">Women</Link>
                        </li>
                        <li>
                            <Link className="link" href="/about">About</Link>
                        </li>
                        <li>
                            <Link className="link" href="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="profile--wrapper">
                <div className="cart">
                    <img src="/icon-cart.svg" alt="shopping cart" />
                </div>
                <div className="user--profile">
                    <img src="/image-avatar.png" className='img-profile' alt="user profile" />
                </div>
            </div>
           
        </div>
    );
}
export default Navbar;