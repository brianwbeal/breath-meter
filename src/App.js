import React, { Component } from 'react';
import './App.css';

class App extends Component {
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

    reset = () => {
        clearInterval(this.interval);
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

    onChange = (e) => {
        const name = e.target.name;
        const value = parseInt(e.target.value);
        this.setState({
            [name]: value });
        this.reset();
    }

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
        }, 1000);
    }

    render() {

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
                  <i class="fas fa-play"> </i>
                </button>
                <button
                  id="stopButton"
                  style={stopButtonStyles}
                  onClick={this.reset}
                >
                  <i class="fas fa-stop"> </i>
                </button>
              </div>
            </div>
          </div>
        );
    }
}

export default App;