

const Footer = () => {
    return (
        <footer className="footer max-w-6xl mx-auto flex flex-col text-black p-8">

            <div className="mx-auto">
                <h1 className="text-5xl font-bold">Gadget Heaven</h1>
                <p className="py-4">
                    Leading the way in cutting-edge technology and innovation.
                </p>

            </div>


            <div className="footer justify-around p-10">
                <nav className="mr-20">
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className="ml-20 mr-20">
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className="ml-20">
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;