
import React from 'react'

class Alert extends React.Component {

    constructor(props) {

        super(props);

        this.state = {message:'is not used on this site', info:'Please, click here for further info'};
        this.style = {

            'div': {

                'text-align': 'center',
                'width': '250px',
                'position': 'absolute',
                'left': '50%',
                'top': '50%',
                'transform': 'translate(-50%, -50%)'

            },

            'a': {

                'text-decoration': 'none'
            },

            'msg': {
                'fontSize': '16px',
                'color': 'rgb(52,38,176)',
                'display': 'block'
            },

            'info': {
                'fontSize': '13px',
                'color': '#888',
                'display': 'block'
            },

            'img': {

                'width': '100px',
                'height': '100px'
            }
        }

    }

    render() {

        return (
            <div style={this.style.div}>
                <a href="http://t3js.org/" target="_blank" style={this.style.a}>
                    <img src="img/t3-icon.svg" style={this.style.img} />
                    <span style={this.style.msg}>{this.state.message}</span>
                    <span style={this.style.info}>{this.state.info}</span>
                </a>
            </div>
        );
    }
}

export default Alert;