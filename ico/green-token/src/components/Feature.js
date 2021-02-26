const Feature = () =>{
    return(
        <>
        <div className="features-boxed" id="feature">
        <div className="container">
            <div className="intro">
                <h2 className="text-center text-success">WHY GREEN TOKEN PROJECT? </h2>
                <p className="text-center">Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae.</p>
            </div>
            <div className="row justify-content-center features">
                <div className="col-sm-6 col-md-5 col-lg-4 item">
                    <div className="box"><i className="fa fa-map-marker icon"></i>
                        <h3 className="name">Fully transparent</h3>
                        <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu.</p></div>
                </div>
                <div className="col-sm-6 col-md-5 col-lg-4 item">
                    <div className="box"><i className="fa fa-clock-o icon"></i>
                        <h3 className="name">Global collaboration</h3>
                        <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu.</p></div>
                </div>
                <div className="col-sm-6 col-md-5 col-lg-4 item">
                    <div className="box"><i className="fa fa-list-alt icon"></i>
                        <h3 className="name">Fully decentralized </h3>
                        <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu.</p></div>
                </div>
                <div className="col-sm-6 col-md-5 col-lg-4 item">
                    <div className="box"><i className="fa fa-leaf icon"></i>
                        <h3 className="name">Trustless </h3>
                        <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu.</p></div>
                </div>
                <div className="col-sm-6 col-md-5 col-lg-4 item">
                    <div className="box"><i className="fa fa-plane icon"></i>
                        <h3 className="name">Faster transactions </h3>
                        <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu.</p></div>
                </div>
                <div className="col-sm-6 col-md-5 col-lg-4 item">
                    <div className="box"><i className="fa fa-phone icon"></i>
                        <h3 className="name">Globally accessible</h3>
                        <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu.</p></div>
                </div>
            </div>
        </div>
    </div>
    <section className="clean-block clean-hero" id="ico"
    style={{backgroundImage:"", 
    color:"rgba(73, 163, 89, 0.85)"
    
    }}>
      <div className="text">
          <h2><strong>TOKEN SALE</strong></h2>
          <p>
            During the first five years of the project, ABC will take a governance role for the execution of the Green Token project.
            After the fifth year, the Green Token project should be governed by
            Decentralized Autonomous Corporation (DAO).
          </p>
          <button className="btn btn-light btn-lg text-success" type="button">BUY ABC TOKEN</button>
          {/* <button className="btn btn-outline-light btn-lg " type="button">DOWNLOAD WHITEPAPER</button> */}
              </div>
  </section>
  </>
    )
}

export default Feature;