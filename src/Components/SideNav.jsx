import rjLogo from "./rjLogo.png"

const SideNav = () => {
    return (
        <nav class="grid-item-2 side-nav">
            <div>
            <img src={rjLogo} alt="rj spellout logo" class="rjLogo"/>
            </div>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/links">Links</a></li>
            </ul>
        </nav>
    )
}

export default SideNav