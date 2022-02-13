import { Container } from "./container"

export const Header = () => {
    return( 
        <div className="header">
            <Container>
                <div className="navigation">
                    <a href=".home.js">Melahat Tayli</a>
                    <a id="rightNav1" href="./research.js">Research</a>
                    <a id="rightNav2" href="./software.js">Software</a>
                </div>
            </Container>
        </div>
    );
};