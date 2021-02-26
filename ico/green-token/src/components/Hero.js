const Hero = () => {
    return(
        <section className="clean-block clean-hero" id="hero"
          style={{backgroundImage:"", 
          color:"rgba(25, 102, 39, 0.85)"
          
          }}>
            <div className="text">
                <h2><strong>GREEN TOKEN PROJECT</strong></h2>
                <p style={{width: "300"}}>
                Conservation and sustainability initiatives can be easily discovered by both local and global
                parties, elevating chances of forming collaborations and synergies for green project staekholders.
                </p>
                <button className="btn btn-light btn-lg" type="button">WATCH DEMO</button>
                <button className="btn btn-outline-light btn-lg " type="button">WHITEPAPER</button>
                    </div>
        </section>
    )
}

export default Hero;