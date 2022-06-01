import react from "react";

function Header({onDarkModeClick, darkState}) {

    return (
        <header>
            <h2>Shopster</h2>
            <button onClick={onDarkModeClick}>
                {darkState ? "Dark" : "Light"} Mode
            </button>
        </header>
    )
}

export default Header