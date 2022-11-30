

function Dashboard() {

function onClickVonder() {
  window.open("https://vonder.slotify.pro", "_blank")
}
function onClickMaki() {
  window.open("https://maki.slotify.pro", "_blank")

}function onClickCreepy() {
  window.open("https://creepy.slotify.pro", "_blank")
}

  return (
    <div>
      <div style={{ position: 'fixed', top: '-10px', left: '0px', zIndex: 100, margin: '0% auto', width: '100%', opacity: '0.7' }}>
        <div className="flex-container-1">

          <li type="none" style={{ textAlign: 'left' }}>
            <div style={{ backgroundColor: 'black', width: '100px', height: '100px' }}>
              <img src="https://media0.giphy.com/media/kEROLGl0EjpjyFCMuF/giphy.gif?cid=6c09b952plr91xfjr1uo3ahoaqjk6tjhrlxd46mrqwctpdmt&rid=giphy.gif&ct=s" width="99px"
                height="99px" />
            </div></li>
          <li type="none">
            <div style={{ backgroundColor: 'black', width: '100%', height: '50px', textAlign: 'right' }}>
              <button className="button-48" role="button"><span className="text">Games</span></button>
              <button className="button-48" role="button"><span className="text">Team Info</span></button>
              <button className="button-48" role="button"><span className="text">About us</span></button>
              <button className="button-48" role="button"><span className="text">Contact Us</span></button>
            </div>
            <div style={{ backgroundColor: 'black', width: '900px', height: '50px', textAlign: 'right' }}>
            </div>
          </li>
        </div>
      </div>

      {/*<!-- ---------------------------------------- Navbar--------------------------------------- --> */}

      <div style={{ height: '100px', width: '1000px', margin: 'auto' }}>

        {/*<!-- ---------------------------------------- images slide ---------------------------------------- --> */}
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={{ top: '100px' }}>
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" width="300px" height="250px"
                src="../images/vonder_slide.png"
                alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" width="300px" height="250px"
                src="../images/maki_slide.png"
                alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" width="300px" height="250px"
                src="./images/creepy_slide.png"
                alt="Third slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

        {/* <!-- ----------------------------------------------------------------------------------------------------------------------- --> */}

        <div id="cards">

          <div className="card" onClick={onClickVonder}>
            <div className="card-content">
              <img className="card-img-top"
                src="../images/vonder.png"
                alt="Card image cap" style={{ height: '220px', width: '298px', borderRadius: '20px', margin: 'auto' }} />
              <h5 style={{ padding: '10px', margin: 'auto' }}>Vonder</h5>
              <p></p>
            </div>
          </div>

          <div className="card" onClick={onClickMaki}>
            <div className="card-content">
              <img className="card-img-top"
                src="../images/maki.png"
                alt="Card image cap" style={{ height: '220px', width: '298px', borderRadius: '20px', margin: 'auto' }} />
              <h5 style={{ padding: '10px', margin: 'auto' }}>Maki Neko</h5>
              <p></p>
            </div>
          </div>

          <div className="card" onClick={onClickCreepy}>
            <div className="card-content">
              <img className="card-img-top"
                src="../images/creepy.png"
                alt="Card image cap" style={{ height: '220px', width: '298px', borderRadius: '20px', margin: 'auto' }} />
              <h5 style={{ padding: '10px', margin: 'auto' }}>Creepy Guy</h5>
              <p></p>
            </div>
          </div>

        </div>

        {/* <!-- ----------------------------------------------------------------------------------------------------------------------- --> */}
      </div>
    </div>
  );
}

export default Dashboard;
