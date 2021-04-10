import React from "react";



export default function FooterComponent() {
  return (
    <footer className='page-footer grey lighten-2'>
      <div className='row'>
        <h3 className='center title black-text'>
          Ed<u>u</u> <i className='i-line'>Nation.</i>
        </h3>
        

       

        <div className='col m4 s12'>
          <h6 className='font center black-text'>
            <b>Drop Your Information </b>
          </h6>
          <div className='card'>
            <div className='card-content'>
              <div className='input-field one'>
                
                <input id='user_name' type='text' className='validate' />
                <label htmlFor='user_name'>Username</label>
              </div>
              <div className='input-field'>
                
                <input id='last_name' type='text' className='validate' />
                <label htmlFor='last_name'>Email ID</label>
              </div>
            </div>
            <div className='card-action'>
              <a
                href='#subscribe'
                className='btn btn-header white-text text-darken-4 teal accent-3'
              >
                {" "}
                Subscribe
              </a>
            </div>
          </div>
        </div>

        
      </div>
      <div className='footer-copyright blue darken-4'>
        <div className='container'>
          © <b className='font'>2021 Edunation</b>
          <a className='grey-text text-lighten-4 right' href='#!'>
            <b></b>
          </a>
        </div>
      </div>
    </footer>
  );
}
