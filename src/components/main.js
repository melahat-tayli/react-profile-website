import { Container } from "./container";
import { Content } from "./content";

let profile_picture_path ="/home/melahat/react-css-html/my-react-website/src/profile-pic.jpg"

export const Main = () => {
    return(
        <Container>
            <Content>
                <img src={profile_picture_path}/>
                <div>
                    <h2> Hey, I'm Melahat Tayli </h2>
                    <p>I am a M.Sc student at Harvard University Extention school in the field of Data Science.</p>
                    <p>In my previous life, I was a material scientist, specialized in photopolymerization. I worked as a researcher in <a href="https://www.pccl.at/en/"> Polymer Competence Center Leoben</a> and collaborated with <a href="https://www.sempermed.com/en/contact/medical-gloves/">Semperit Technische Produkte Gesellschaft m.b.H.</a></p>
                    <p>I am currently raising my baby boy and learning html, css and javascript as a hobby. You can follow my projects on my <a href="https://github.com/melahat-tayli">github</a>.</p>
                </div>                
            </Content>
        </Container>
    );
};