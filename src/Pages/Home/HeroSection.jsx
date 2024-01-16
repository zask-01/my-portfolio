export default function HeroSection(){
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I'm Zask</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">
                            Full Stack
                        </span>{""}
                        <br/>
                        Developer
                    </h1>
                    <p className="hero--section--title--description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Necessitatibus, suscipit! Ea, exercitationem iste! Repellendus,
                        aperiam quod porro amet aspernatur mollitia.
                        <br/>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Necessitatibus, suscipit! Ea, exercitationem
                    </p>
                </div>
                <button className="btn btn-primary">Get In Touch</button>
            </div>
            <div className="hero--section--img">
                <img src="./img/hero_img.png" alt="bla bla" />
            </div>
        </section>
    )
}

