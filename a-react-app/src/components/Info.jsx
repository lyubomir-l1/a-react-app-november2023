export default function Info() {
    return(
        <div className="info_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10 ml-auto">
              <div className="row info_main-row">
                <div className="col-md-6 pr-0">
                  {/* contact section */}
                  <section className="contact_section">
                    <h2>Request A Call Back</h2>
                    <form action="">
                      <div>
                        <input type="text" placeholder="Name" />
                      </div>
                      <div>
                        <input type="text" placeholder="Phone Number" />
                      </div>
                      <div>
                        <input type="email" placeholder="Email" />
                      </div>
                      <div>
                        <input
                          type="text"
                          className="message-box"
                          placeholder="Message"
                        />
                      </div>
                      <div className="d-flex ">
                        <button>SEND</button>
                      </div>
                    </form>
                    <div className="map_container">
                      <div className="map">
                        <div
                          id="googleMap"
                          style={{ width: "100%", height: 300 }}
                        />
                      </div>
                    </div>
                  </section>
                  {/* end contact section */}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}