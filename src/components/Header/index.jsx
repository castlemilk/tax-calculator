import React from 'react';
import styled from 'styled-components';
import Transition from 'react-transition-group/Transition';
import headerBackground from '../../assets/images/header-background.svg';
import Chart from '../Chart/index';

const Background = styled.div`
  .hero-background {
    display: block;
    background-image: url(${headerBackground});
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-position: bottom;
    min-height: 280px;
    margin: -7px;
    position: relative;
  }
  .container {
    display: block;
    margin: auto;
    max-width: 1140px;
    padding-left: 1em;
    padding-right: 1em;
    padding-top: 50px;
  }
  .hero-content {
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(80px,1fr));
    grid-column-gap: 100px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
  }
  .hero-form {

  }
  margin: 0;
`;
const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inside: false };
  }

  componentDidMount() {
    this.toggleEnterState();
  }

  toggleEnterState() {
    this.setState({ inside: true });
  }

  render() {
    const { inside } = this.state;
    return (
      <Background>
        <Transition
          timeout={duration}
          in={inside}
        >
          {
            state => (
              <div
                className="hero-background"
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state],
                }}
              >
                <div className="container">
                  <div className="hero-content">
                    <div className="hero-form">
                      <form>
                        <input />
                      </form>
                    </div>
                    <div className="hero-animate">
                      <Chart />
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        </Transition>
      </Background>
    );
  }
}

export default Header;
