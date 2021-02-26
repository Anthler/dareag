const Team = () => {
    return(
      <div className="team" id="team">
                <section className="clean-block about-us">
            <div className="container">
                <div className="block-heading">
                    <h2 className="text-success"><strong>OUR TEAM</strong></h2>               
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-6 col-lg-4">
                        <div className="card clean-card text-center"><img className="card-img-top w-100 d-block" src="assets/img/avatars/avatar1.jpg" />
                            <div className="card-body info">
                                <h4 className="card-title">Evarist</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <div className="icons" style={{color: "green"}}><a href="#"><i className="icon-social-facebook" style={{color: "green"}}></i></a><a href="#"><i className="icon-social-instagram" style={{color: "green"}}></i></a><a href="#"><i className="icon-social-twitter" style={{color: "green"}}></i></a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="card clean-card text-center"><img className="card-img-top w-100 d-block" src="assets/img/avatars/avatar2.jpg" />
                            <div className="card-body info">
                                <h4 className="card-title">Richard Abambillah</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <div className="icons" style={{color: "green"}}><a href="#"><i className="icon-social-facebook" style={{color: "green"}}></i></a><a href="#"><i className="icon-social-instagram" style={{color: "green"}}></i></a><a href="#"><i className="icon-social-twitter" style={{color: "green"}}></i></a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="card clean-card text-center"><img className="card-img-top w-100 d-block" src="assets/img/avatars/avatar3.jpg" />
                            <div className="card-body info">
                                <h4 className="card-title">Anthler Abambillah</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <div className="icons" style={{color: "green"}}><a href="#"><i className="icon-social-facebook" style={{color: "green"}}></i></a><a href="#"><i className="icon-social-instagram" style={{color: "green"}}></i></a><a href="#"><i className="icon-social-twitter" style={{color: "green"}}></i></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
    )
}

export default Team;