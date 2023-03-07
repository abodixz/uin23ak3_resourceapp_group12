import Button from "./Button";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="container">
            <header>
                <Link to="/">
                    <h1>Ressursarkiv</h1>
                </Link>
            </header>
            <nav>
                <Button />
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    );
}