import './App.css';
import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar, Homepage, Cryptocurrencies, News, CryptoDetails } from './components';

const App = () => {
  return (
    <div className="App">
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route exact path='/' element={<Homepage />}></Route>
              <Route exact path='/cryptocurrencies' element={<Cryptocurrencies />}></Route>
              <Route exact path='/crypto/:coinId' element={<CryptoDetails />}></Route>
              <Route exact path='/news' element={<News />}></Route>
            </Routes>
          </div>
        </Layout>
        <div className='footer'>
          <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
            Cryptoverse <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to='/'>Home</Link>
            <Link to='/news'>News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
