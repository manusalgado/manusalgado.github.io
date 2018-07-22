import React, { Fragment } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import imgHero from './../assets/pope.png';
import handUp from './../assets/icons/hand-up.png';
import handDown from './../assets/icons/hand-down.png';
import west from './../assets/west.png';
import malala from './../assets/malala-main.png';

const Home = () => (
  <section className="container main-grid">
    <div className="row head-main-content">
      <div className="col-md-3">
        <p className="__p">Speak out. Be heard. <span>Be counted</span></p>
      </div>
      <div className="col-md-9">
        <p className="__p">Rule of Thumb is a crow sourced court of public opinion where anyone
            and averyone can speak out and speak freely. It's easy: You opinion, we analyze and put the data in a public report.
        </p>
      </div>
    </div>
    <div className="row votes">
      <h3>Votes</h3>
    </div>
    <div className="row __grid">
      <div className="col-md-6 __div">
        <div className="image-content">
          <img src={west} alt="vote"/>
        </div>
        <div className="detail">
          <h3>Kanye West</h3>
          <p><span>1 mounth ago</span> in Entertainment</p>
          <p>Vestibulum diam ante, porttitor a odio eget, eget, rhoncus neque. Aenean eu velit libero</p>
          <div className="__img">
            <img src={handUp} alt="Up"/>
          </div>
          <div className="__img">
            <img src={handDown} alt="Down"/>
          </div>
          <Link to="#" className="__link">Vote now</Link>
          <div className="__vote-img">
            <img src={handUp} alt="Up"/>
          </div>
        </div>
      </div>
      <div className="col-md-6 __div">
        <div className="image-content">
          <img src={west} alt="vote"/>
        </div>
        <div className="detail">
          <h3>Kanye West</h3>
          <p><span>1 mounth ago</span> in Entertainment</p>
          <p>Vestibulum diam ante, porttitor a odio eget, eget, rhoncus neque. Aenean eu velit libero</p>
          <div className="__img">
            <img src={handUp} alt="Up"/>
          </div>
          <div className="__img">
            <img src={handDown} alt="Down"/>
          </div>
          <Link to="#" className="__link">Vote now</Link>
          <div className="__vote-img">
            <img src={handUp} alt="Up"/>
          </div>
        </div>
      </div>
    </div>
    <div className="row __grid">
      <div className="col-md-6 __div">
        <div className="image-content">
          <img src={west} alt="vote"/>
        </div>
        <div className="detail">
          <h3>Kanye West</h3>
          <p><span>1 mounth ago</span> in Entertainment</p>
          <p>Vestibulum diam ante, porttitor a odio eget, eget, rhoncus neque. Aenean eu velit libero</p>
          <div className="__img">
            <img src={handUp} alt="Up"/>
          </div>
          <div className="__img">
            <img src={handDown} alt="Down"/>
          </div>
          <Link to="#" className="__link">Vote now</Link>
          <div className="__vote-img">
            <img src={handUp} alt="Up"/>
          </div>
        </div>
      </div>
      <div className="col-md-6 __div">
        <div className="image-content-4">
          <img src={malala} alt="vote"/>
        </div>
        <div className="detail">
          <h3>Kanye West</h3>
          <p><span>1 mounth ago</span> in Entertainment</p>
          <p>Vestibulum diam ante, porttitor a odio eget, eget, rhoncus neque. Aenean eu velit libero</p>
          <div className="__img">
            <img src={handUp} alt="Up"/>
          </div>
          <div className="__img">
            <img src={handDown} alt="Down"/>
          </div>
          <Link to="#" className="__link">Vote now</Link>
          <div className="__vote-img">
            <img src={handUp} alt="Up"/>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <p className="__submit">
          Is there anyone else you would want us to add?
        </p>
        <Link to="#" className="__submit-link">Submit a Name</Link>
      </div>
    </div>
  </section>
);
const Footer = () => (
  <div className="container">
    footer
  </div>
);
const PastTtrials = () => <h1>Past Trials</h1>;
const HowItWorks = () => <h1>HowItWorks</h1>;
const LogIn = () => <h1>Log In / Sing Up</h1>;
const Header = () => (
  <header>
    <div className="main-hero">
    <img src={imgHero} alt="Pope" className="hero__img"/>
    </div>
          <div className="main-header">
            <div className="container">
              <div className="row">
                <div className="col-md-6 __div">
                  <Link className="__link-title" to="/">Rule of Thumb.</Link>
                  </div>
                  <div className="col-md-6 __div">
                  <nav className="d-flex justify-content-end __nav">
                    <Link className="__link" to="/past-trials">Past Trials</Link>
                    <Link className="__link" to="/how-it-works">How it works</Link>
                    <Link className="__link" to="/log-in">Log In / Sing Up</Link>
                  </nav>
                  </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row header-content">
              <p>What's your opinion on</p>
              <h2>Pope Francis?</h2>
              <p>He's talking tough on clery sexual abuse,
                but is he just another papal pervert protector?
                (thumbs down) or a true pedophilie punshing pontiffic?
                (thumbs up)
              </p>
              <Link to="#" className="__link">More information</Link>
              <p>What's Your Veredict?</p>
              <div className="col-md-6 header-content__up">
                <Link to="#" className="__link">
                  <img src={handUp} alt="Up"/>
                </Link>
              </div>
              <div className="col-md-6 header-content__down">
                <Link to="#" className="__link">
                  <img src={handDown} alt="Down"/>
                </Link>
              </div>
            </div>
          </div>
        <div className="closing">
          <div className="__div col-md-3">
            <p>Closing in</p>
          </div>
          <div className="__div col-md-9">
            <p>22 days</p>
          </div>
        </div>
  </header>
);


const App = () => (
  <div>
    <BrowserRouter>
        <Fragment>
          <Header />
          <Switch>
            <Route component={Home} path="/" exact />
            <Route component={PastTtrials} path="/past-trials" />
            <Route component={HowItWorks} path="/how-it-works" />
            <Route component={LogIn} path="/log-in" />
          </Switch>
        </Fragment>
      </BrowserRouter>
    <Footer />
  </div>
);

export default App;