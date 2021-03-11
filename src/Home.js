import React, { Component } from 'react';
import { Input, Button, IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ''
    };
  }
  handleChange = (e) => this.setState({ url: e.target.value });

  join = () => {
    if (this.state.url !== '') {
      let url = this.state.url.split('/');
      window.location.href = `/${url[url.length - 1]}`;
    } else {
      let url = Math.random().toString(36).substring(2, 7);
      window.location.href = `/${url}`;
    }
  };

  render() {
    return (
      <div className='container2'>
        <div
          style={{

          }}>
          Source code:
          <IconButton
            style={{ background: 'transparent', color: '#113355' }}
            onClick={() =>
              (window.location.href = 'https://github.com/oaluna/zoom-clone')
            }>
            <GitHubIcon />
          </IconButton>
        </div>

        <div>
          <h1 style={{ fontSize: '45px', color: '#135' }}>Video Chat Demo</h1>
          <h4 style={{ fontWeight: '200', color: '#f0f8ff' }}>
            Video conference app for staying in touch with all your
            loved ones.
          </h4>
        </div>

        <div
          style={{
            background: 'transparent',
            width: '30%',
            height: 'auto',
            padding: '20px',
            minWidth: '400px',
            textAlign: 'center',
            margin: 'auto',
            marginTop: '100px'
          }}>
          <p style={{ margin: 0, fontWeight: 'bold', paddingRight: '50px' }}>
            Start or join a meeting
          </p>
          <Input placeholder='URL' onChange={(e) => this.handleChange(e)} />
          <Button
            variant='contained'
            color='primary'
            onClick={this.join}
            style={{ margin: '20px' }}>
            Go
          </Button>
        </div>
      </div>
    );
  }
}

export default Home;
