
import "./Pages.css";
import "./Education.css";

function Education(){
    return (
        <div className="page education">
            <h1 className="education-title">Academic Degrees</h1>
            <div className="education-wrapper">
                <div className="education-item">
                    <div className="education-item-title">Electrical Engineering</div>
                    <div className="education-item-kind">Bachelor of Science (ABET Accredited)</div>
                    <hr className="education-hr" />
                    <div className="education-item-university">Universidad de Los Andes</div>
                    <div className="education-item-location">Bogotá, Colombia</div>
                    <hr className="education-hr" />
                    <div className="education-item-coursework"><b>Relevant Coursework:</b> Renewable Energy, Power Electronics. </div>
                </div>

                <div className="education-item">
                    <div className="education-item-title">Electronics Engineering</div>
                    <div className="education-item-kind">Bachelor of Science (ABET Accredited)</div>
                    <hr className="education-hr" />
                    <div className="education-item-university">Universidad de Los Andes</div>
                    <div className="education-item-location">Bogotá, Colombia</div>
                    <hr className="education-hr" />
                    <div className="education-item-coursework"><b>Relevant Coursework:</b> Electronic Digital Systems Design and Architecture, Electronic Digital Systems. </div>
                </div>

                <div className="education-item">
                    <div className="education-item-title">Electronics and Computer Engineering</div>
                    <div className="education-item-kind">Master of Science</div>
                    <hr className="education-hr" />
                    <div className="education-item-university">Universidad de Los Andes</div>
                    <div className="education-item-location">Bogotá, Colombia</div>
                    <hr className="education-hr" />
                    <div className="education-item-coursework"><b>Relevant Coursework:</b> Machine Learning, Embedded Systems, Optimization, Natural Language Processing. </div>
                </div>
            </div>
            <h1 className="education-title">Self Learning</h1>
            <div className="education-wrapper">
                <div className="education-item">
                    <div className="education-self-title">Computer Architecture</div>
                    <hr className="education-hr" />
                    <div className="education-self-desc">I wanted to answer myself "How 
                    a computer processor works?". That lead me to research the organization
                    of a processor and how it is optimized depending design requirements 
                    (i.e. power and performance). By reading books I was able to understand
                    how modern processors work. I learned about pipelining, in-order and 
                    out-of-order execution, superscalar, VLIW and vector processors, etc. 
                    </div>
                </div>
                <div className="education-item">
                    <div className="education-self-title">Verilog</div>
                    <hr className="education-hr" />
                    <div className="education-self-desc">Learning the ideas behind a processor
                    are one thing but implementing them is another story. I wanted to improve 
                    my Verilog skills acquired during my undergrad studies. My ability with the
                    description language improved by reading and doing the exercises from the 
                    "Verilog HDL" book by Samir Palnitkar. I also imposed myself a coding style
                    to improve code readability and reusability.</div>
                </div>
                <div className="education-item">
                    <div className="education-self-title">Design Verification</div>
                    <hr className="education-hr" />
                    <div className="education-self-desc">My Master's thesis thaught me that
                    hardware development required more verification steps than design itself.
                    Since my Master's thesis I've been researching and learning how modern
                    hardware verification is executed. I learned about UML and how it can
                    improve the development cycle. I also learned about SystemC and how it can
                    be used to model digital systems on different abstraction levels.</div>
                </div>
            </div>
            <h1 className="education-title">Certifications</h1>
            <div className="education-wrapper">
                <div className="education-item">
                    <div className="education-item-title">Graphic Design</div>
                    <div className="education-item-kind">Course Certificate</div>
                    <hr className="education-hr" />
                    <div className="education-item-university">Coursera</div>
                    <div className="education-item-location">Online</div>
                    <hr className="education-hr" />
                    <div className="education-item-coursework">Learned basic principles of graphic design to improve my visual communication skills.</div>
                </div>
                <div className="education-item">
                    <div className="education-item-title">DeepLearning.AI TensorFlow Developer</div>
                    <div className="education-item-kind">Professional Certificate</div>
                    <hr className="education-hr" />
                    <div className="education-item-university">Coursera</div>
                    <div className="education-item-location">Online</div>
                    <hr className="education-hr" />
                    <div className="education-item-coursework">Learned how to implement different deep learning models with TensorFlow.</div>
                </div>
                <div className="education-item">
                    <div className="education-item-title">Build Your First React Website</div>
                    <div className="education-item-kind">Guided Project</div>
                    <hr className="education-hr" />
                    <div className="education-item-university">Coursera</div>
                    <div className="education-item-location">Online</div>
                    <hr className="education-hr" />
                    <div className="education-item-coursework">Learned React.js basic principles and syntax.</div>
                </div>
            </div>
        </div>
    );
}

export default Education;
