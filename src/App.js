import React, { Component } from 'react';
import './App.css';

// class-based React component
class App extends Component {

    // declare key-value pairs for initial app state
    state = {
        count: 1,
        max: 10,
        goingUp: true,
        playing: 'paused',
        whichAnimation: '',
        visibility: 'none',
        opacity: '0%',
        playVisibility: 'inline-block',
        stopVisibility: 'none'
    }

    // set app state values back to default
    reset = () => {

        // stops animation cycle
        clearInterval(this.interval);

        // resets default values
        this.setState({
            count: 1,
            playing: 'paused',
            whichAnimation: '',
            visibility: 'none',
            opacity: '0%',
            playVisibility: 'inline-block',
            stopVisibility: 'none'
        });
    }

    // declare handler for changes to slider input
    onChange = (e) => {
        const name = e.target.name;
        const value = parseInt(e.target.value);
        this.setState({
            [name]: value });
        this.reset();
    }

    // declare function to start animation cycle
    startCycle = () => {
        this.setState({
            playing: 'running',
            visibility: 'block',
            opacity: '100%',
            whichAnimation: 'swell',
            goingUp: true,
            playVisibility: 'none',
            stopVisibility: 'inline-block'
        });

        this.interval = setInterval(() => {
            if (this.state.goingUp === true) {
                if (this.state.count < this.state.max) {
                    this.setState({ count: this.state.count + 1 });
                } else if (this.state.count === this.state.max) {
                    this.setState({
                        goingUp: false,
                        count: this.state.max - 1,
                        whichAnimation: 'contract'
                    });
                }
            } else if (this.state.goingUp === false) {
                if (this.state.count > 0) {
                    this.setState({ count: this.state.count - 1 });
                } else if (this.state.count === 0) {
                    this.setState({
                        goingUp: true,
                        count: 1,
                        whichAnimation: 'swell'
                    });
                }
            }
        }, 1000);  // sets interval to 1 second
    }

    render() {
        
        // configure dynamic styles
        const ballStyles = {
            animationPlayState: this.state.playing,
            animationDuration: `${this.state.max}s`,
            animationName: this.state.whichAnimation,
            display: this.state.visibility,
            animationTimingFunction: 'linear',
            transition: '.25s ease-in-out'
        }

        const msgStyles = {
            opacity: this.state.opacity,
            transition: '.25s ease-in-out'
        }

        const playButtonStyles = {
            display: this.state.playVisibility
        }

        const stopButtonStyles = {
            display: this.state.stopVisibility
        }

        // define app markup
        return (
          <div className="App">
            <div className="breath-msg">
              <h3 style={msgStyles}>
                
                {this.state.goingUp === true ? "inhale" : "exhale"}
              </h3>
            </div>
            <div className="breath-visual">
              <div className="ball-parent">
                <div className="ball" style={ballStyles}>
                  
                </div>
              </div>
            </div>
            <div className="breath-count">
              <h3 style={msgStyles}> {this.state.count} </h3>
            </div>
            <div className="breath-controls">
              <div>
                <input
                  type="range"
                  value={this.state.max}
                  name="max"
                  onChange={this.onChange}
                  min="0"
                  max="20"
                  step="1"
                />
                <span>{this.state.max} second breath</span>
              </div>
              <div>
                <button
                  id="playButton"
                  style={playButtonStyles}
                  onClick={this.startCycle}
                >
                  <i className="fas fa-play"> </i>
                </button>
                <button
                  id="stopButton"
                  style={stopButtonStyles}
                  onClick={this.reset}
                >
                  <i className="fas fa-stop"> </i>
                </button>
              </div>
            </div>
          </div>
        );
    }
};

export default App;

