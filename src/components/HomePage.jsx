import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoApi'
import { CryptoCurrencies, News } from '../components'


const HomePage = () => {
  const { data: cryptos, isFetching } = useGetCryptosQuery()
  const globalStats = cryptos?.data?.stats
  console.log(globalStats)

  if (isFetching) return <p>Loading...</p>

  return (
    <>
      <Typography.Title level={2} className='heading'>Global Crypto Stats</Typography.Title>
      <Row>
        <Col span={12}><Statistic title='Total Cryptocurrencies' value={globalStats.total} /></Col>
        <Col span={12}><Statistic title='Total Exchanges' value={millify(globalStats.totalExchanges)} /></Col>
        <Col span={12}><Statistic title='Total Market Cap' value={millify(globalStats.totalMarketCap)} /></Col>
        <Col span={12}><Statistic title='Total 24h Volume' value={millify(globalStats.total24hVolume)}  /></Col>
        <Col span={12}><Statistic title='Total Markets' value={millify(globalStats.totalMarkets)}  /></Col>
      </Row>
      <div className='home-heading-container'>
        <Typography.Title level={2} className='home-title'>Top 10 Crypto Currencies in the world</Typography.Title>
        <Typography.Title level={3} className='show-more'><Link to='/cryptocurrencies'>Show more</Link></Typography.Title>
      </div>
      <CryptoCurrencies simplified/>
      <div className='home-heading-container'>
        <Typography.Title level={2} className='home-title'>Latest Crypto News</Typography.Title>
        <Typography.Title level={3} className='show-more'><Link to='/cryptocurrencies'>Show more</Link></Typography.Title>
      </div>
      <News />
    </>
  )
}

export default HomePage