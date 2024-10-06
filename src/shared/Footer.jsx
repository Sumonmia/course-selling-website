

const Footer = () => {
    return (
        <div>
            <div className="mt-10 rounded-md">
                <footer className="footer bg-base-200 text-base-content p-10">
                    <aside>
                        <h3 className="text-2xl font-bold text-red-600">LearnSphere</h3>
                        <p>
                            Start Learning Today, Shape Your Tomorrow
                            <br />
                            <address>23/7, South lane, Motijheel, Dhaka</address>
                        </p>
                    </aside>
                    <nav>
                        <h6 className="footer-title">Cotact Details</h6>
                        <a className="link ">Branding</a>
                        <a className="link ">Design</a>
                        <a className="link ">Marketing</a>
                        <a className="link ">Advertisement</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Social Links</h6>
                        <a className="link">Facebook</a>
                        <a className="link">Instagram</a>
                        <a className="link">Udemy</a>
                        <a className="link">Youtube</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link">Terms of use</a>
                        <a className="link">Privacy policy</a>
                        <a className="link">Cookie policy</a>
                    </nav>
                </footer>
            </div>
        </div>
    )
}

export default Footer
