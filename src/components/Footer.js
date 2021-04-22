const Footer = () => {

    return (
        <footer className="footer">
            <p className={"game-explanation" + " " + "unselectable"}>
                <strong className={"important" + " " + "unselectable"}> Created by <a href="https://github.com/LexSava" target="_blank">Lex Sava. </a> 2021 </strong>
            </p>
            <div style={{ width: 50 }}>
                <a href="https://rs.school/js/" target="_blank">
                    <img src="./img/rs_school_js.svg" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;