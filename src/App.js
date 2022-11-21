import './App.css';
import backgroundImg from './images/background.png'
import logoImg from './images/logo.png';
import {Button, Input } from 'antd';
import Login2 from './images/login-2.png';
import FB from './images/button-facebook.png';
import Login from './images/login.png'
import Login1 from './images/login-1.png'
import Register1 from './images/register-1.png';
import Gift from './images/gift.png';
import { useState } from 'react';
import { Carousel } from 'antd';
import LiveCasino from './images/live-casino.png'
// import AppCarousel from './core/AppCarousel'
// import {Typography} from 'antd';
import './style.css.less';



function App() {

  const [style1, setStyle1] = useState({
    display: "none",
  });

  const [style2, setStyle2] = useState({
    display: "block",
  });
  
  const ClickRegisterButton = () => {
    setStyle1({display: "block"});
    setStyle2({display: "none"});
  }

  const ClickLoginButton = () => {
    setStyle2({display: "block"});
    setStyle1({display: "none"});
  }

  const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  

  return (
    <div >
      
      <div className="main" style={{ backgroundImage: `url(${backgroundImg})`}}>
        <div>
          <header>
            <div className="container">
              <div className="row">
                <a className="logo text-center">
                  <img className="img-responsive" data-src="images/logo.png" src={logoImg} alt=""/>
                </a>
              </div>
            </div>
          </header>
          <section className='player'>
            <div class="container">
              <div className='row'>
                <div className='form_style' style={style2}>
                  <div className='tab-content'>
                    <div className='form-group'>
                      <Button className='btn-login' style={{ backgroundImage: `url(${Login})`}}></Button>
                      <Button className='btn-register' onClick={ClickRegisterButton}></Button>
                      <div className='tab-pane'>
                        <span className='ant-input-affix-wrapper'>
                          <Input placeholder='Tên đăng nhập' className='input-default'></Input>
                        </span>
                        <Input.Password maxLength={30} placeholder='Mật khẩu' type='password' className='ant-input-affix-wrapper '/>
                      </div>
                    </div>
                    <div className='form-group btn_form'>
                      <Button className='btn-login' style={{ backgroundImage: `url(${Login2})`}}></Button>
                      <Button className='btn-register' style={{ backgroundImage: `url(${FB})`}}></Button>
                    </div>
                  </div>
                </div>
                <div className='form_style' style={style1}>
                  <div className='tab-content'>
                    <div className='form-group'>
                      <Button className='btn-register' style={{ backgroundImage: `url(${Login1})`}}  onClick={ClickLoginButton}></Button>
                      <Button className='btn-login' style={{ backgroundImage: `url(${Register1})`}}></Button>
                      <div className='tab-pane'>
                        <span className='ant-input-affix-wrapper'>
                          <Input placeholder='Tên đăng nhập' className='input-default'></Input>
                        </span>
                        <Input.Password maxLength={30} placeholder='Mật khẩu' type='password' className='ant-input-affix-wrapper '/>
                        <Input.Password maxLength={30} placeholder='Nhập lại mật khẩu' type='password' className='ant-input-affix-wrapper '/>
                      </div>
                    </div>
                    <div className='form-group btn_form'>
                      <Button className='btn-login' style={{ backgroundImage: `url(${Gift})`}}></Button>
                      <Button className='btn-register' style={{ backgroundImage: `url(${FB})`}}></Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className='banner-r'>
          <img src={LiveCasino}>
          </img>


        {/* <div className='auth-slider'>
            <AppCarousel autoplay swipeToSlide draggable>
              <div className='auth-slider-item'>
                <Typography.Title level={5} className='title'>
                  abc
                </Typography.Title>
                <Typography.Text className='subtitle'>
                  abc
                </Typography.Text>
              </div>
              <div className='auth-slider-item'>
                <Typography.Title level={5} className='title'>
                  abc
                </Typography.Title>
                <Typography.Text className='subtitle'>
                  abc 
                </Typography.Text>
              </div>
              <div className='auth-slider-item'>
                <Typography.Title level={5} className='title'>
                  abc
                </Typography.Title>
                <Typography.Text className='subtitle'>
                  abc
                </Typography.Text>
              </div>
            </AppCarousel>
          </div> */}
        </div>
        <section id="game">
          <div className='container'>
            <img src={LiveCasino} className='img-game'>
            </img>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;


