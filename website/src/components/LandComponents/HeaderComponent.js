import React, { Component } from "react";
import bg from "../asset/land.png";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
export default class HeaderComponent extends Component {
  componentDidMount() {
    M.Modal.init(this.Modal);
  }
  render() {
    return (
      <div className='row'>
        <div className='col s12 m6'>
          <img className='responsive-img' src={bg} />
        </div>
        <div className='col s12 m6'>
          <h4 className='font'>
            <b>Find your</b>
          </h4>
          <h1 className='title purple-text text-darken-4'>
            Edunati
            <u>
              <span className='teal-text text-accent-3 i-line'>on</span>
            </u>{" "}
          </h1>
          <p className='para'>
           In recent years, the world has changed dramatically, with online teaching creating a virtual revolution in the world of education.
            <br /> 
          </p>
          <h6 className='font'>
            <b>Join Us Today</b>
          </h6>
          <p className='para'>
            There are many variations tools available.
          </p>
          <a
            href='#get'
            className='btn btn-header white-text text-darken-4 teal accent-3 modal-trigger'
            data-target='modal1'
          >
            Get into classroom
          </a>
        </div>

        <div>
          <div
            ref={(Modal) => {
              this.Modal = Modal;
            }}
            id='modal1'
            className='modal'
          >
            <div className='modal-content'>
              <h4 className='font'>The Offer Is Coming Soon!</h4>
              <p className='para'>
                Thanks For You Concern, but we're under development!
              </p>
            </div>
            <div className='modal-footer'>
              <a
                href='#close'
                className='btn btn-header modal-close white-text teal accent-3'
              >
                Close
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
