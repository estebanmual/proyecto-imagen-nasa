import Header from "../Header";
import Footer from "../Footer";

const Layout = (props: any) => {
    const { children } = props;

    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
} 

export default Layout