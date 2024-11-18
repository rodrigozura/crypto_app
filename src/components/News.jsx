import React, { useState } from 'react'
import moment from 'moment'
import { Avatar, Card, Col, Row, Select, Typography } from 'antd'

import { useFetchNewsQuery } from '../services/cryptoNewApi'
import { useGetCryptosQuery } from '../services/cryptoApi'
import Loader from './Loader'

const { Title, Text } = Typography
const { Option } = Select

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("crypto")
  const count = simplified ? 10 : 100
  const { data: news, isFetching } = useFetchNewsQuery({newsCategory, count})
  const { data: cryptosList } = useGetCryptosQuery(100)

  if (isFetching) return <Loader />;

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className='select-news'
            placeholder="Select a Crypto"
            optionFilterProp='children'
            onChange={(value) =>setNewsCategory(value)}
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value="crypto">Crypto</Option>
            {cryptosList?.data?.coins.map((coin) => <Option value={coin.name}>{coin.name}</Option>)}
          </Select>
        </Col>
      )}
      {
        news.articles.map((article, index) => (
          <Col xs={24} sm={12} lg={8} key={index}
          ><Card title={article.title} hoverable className='news-card'>
              <a href={article.url} target='_blank'>
                <div className='news-image-container'>
                  <Title className='news-title' level={4}>
                    {article.title}
                  </Title>
                  <img src={article?.urlToImage} alt={"img"} />
                </div>
                <p>
                  {article.description > 100 ? `${article.description.substring(0, 100)}...` : article.description}
                </p>
                <div className='provider-container'>
                  <div>
                    <Text>{article?.source?.name}{": "}</Text>
                    <Text>{moment(article.publishedAt).startOf('ss').fromNow()}</Text>
                  </div>
                </div>
              </a>

            </Card></Col>
        ))
      }
    </Row>
  )
}

export default News