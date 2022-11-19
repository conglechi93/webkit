import './App.css';
import backgroundImg from './images/background.png'
import logoImg from './images/logo.png';
import {Button, Input } from 'antd';
import Login2 from './images/login-2.png';
import FB from './images/button-facebook.png';
//import Login from './images/login-1.png'
import Register1 from './images/register-1.png'


function App() {

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
                <div className='form_style'>
                  <div className='tab-content'>
                    <div className='form-group'>
                      <Button className='btn-login'></Button>
                      <Button className='btn-register'></Button>
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
                <div className='form_style'>
                  <div className='tab-content'>
                    <div className='form-group'>
                      <Button className='btn-register'></Button>
                      <Button className='btn-login' style={{ backgroundImage: `url(${Register1})`}}></Button>
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
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;


