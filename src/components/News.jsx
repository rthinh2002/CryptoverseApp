import React, { useState, useEffect } from 'react'
import { Select, Typography, Row, Col, Card } from 'antd';
import moment from 'moment';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../services/cryptoApi';

import Loader from './Loader';

const { Text, Title } = Typography;
const { Option } = Select;

const demoImage = 'http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg';

const News = ({simplified}) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency'); 
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory });
  const { data } = useGetCryptosQuery(100);
  const [count] = useState(simplified ? 6 : 12 );

  if(!cryptoNews?.data) return <Loader />;

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select 
            showSearch className='select-news' 
            placeholder="Select a News Categories" 
            optionFilterProp="children" 
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) => option.children.toLowercase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value='Cryptocurrency'>Cryptocurrency</Option>
            {data?.data?.coins.map((coin) => <Option value={coin.name}>{coin.name}</Option>)}
          </Select>
        </Col>  
      )}
      {cryptoNews?.data.slice(0, count).map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className='news-card'>
            <a href={news.link} target='_blank' rel="noreferrer">
              <div className='news-image-container'>
                <img src={news?.photo_url || demoImage} alt='news' />
              </div>
              <Title className='news-title' level={4}>{news.title}</Title>
              <div className='provider-container'>
                <Text>{moment(news.published_datetime_utc).startOf('ss').fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default News