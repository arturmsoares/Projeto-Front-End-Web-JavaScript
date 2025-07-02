import { Link } from "react-router-dom";

export default function Menu() {
    return(
        <nav>
            <Link to="/">Homepage</Link>
            <Link to="/SobreNos">Sobre Nós</Link>
        </nav>
    );
}