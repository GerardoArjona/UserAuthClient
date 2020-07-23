import React from 'react';
import '../App.css';

function Home() {
  return (
      <section className="container main-section">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-10 col-sm-12 col-12 text-center mt-2">
            <h1 className="welcome-title">
              Welcome!
            </h1>
          </div> 
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-10 col-sm-12 col-12 text-center mt-5">
            <h1 className="description-text">
              A <b>Node.js</b> user API <b>web client</b>
            </h1>
          </div> 
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-10 col-sm-12 col-12 text-center mt-5">
            <h2>
              Feel free to explore the site &#128521;
            </h2>
          </div> 
        </div>
      </section>
  );
}

export default Home;
