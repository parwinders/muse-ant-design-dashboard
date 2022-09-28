import { useState, useEffect } from 'react';

import { Card, Table, Input } from 'antd';

function Tables() {
    const [filteredData, setFilteredData] = useState([]);
    const [rawdata, setRawData] = useState([]);

    useEffect(() => {
        const asyncFetch = async () => {
            const allCoin = await fetchedCoinBalance();
            let coinArr = allCoin.coin_balance;
            coinArr = coinArr.map((rec) => {
                return { ...rec, key: rec.coin_id };
            });
            setFilteredData(coinArr);
            setRawData(coinArr);
            console.log('coinArr', coinArr);
        };
        asyncFetch();
    }, []);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'coin_name',
            key: 'coin_name',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            sorter: (a, b) => a.price - b.price,
        },
        {
            title: 'Balance',
            dataIndex: 'total_balance',
            key: 'total_balance',
        },
    ];

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    return (
        <>
            <Card
                bordered={false}
                className='criclebox tablespace mb-24'
                title='Crypto Asset Balance Sheet'
            >
                <Input
                    placeholder='Search Crypto Asset'
                    onChange={(e) => {
                        let filteredData = rawdata.filter((coinDoc) =>
                            coinDoc.coin_name
                                .toLowerCase()
                                .startsWith(e.target.value.toLowerCase())
                        );
                        setFilteredData(filteredData);
                    }}
                />
                <Table
                    dataSource={filteredData}
                    columns={columns}
                    onChange={onChange}
                />
                ;
            </Card>
        </>
    );
}

const fetchedCoinBalance = async () => {
    // try {
    //   var myHeaders = new Headers();
    //   myHeaders.append("X-User-Email", "p4rw1nd3r+1@gmail.com");
    //   myHeaders.append("Accept", "application/json");
    //   myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwNHJ3MW5kM3IrMUBnbWFpbC5jb20iLCJleHAiOjE2NjQ0Mzc5MTgsImlhdCI6MTY2NDM1MTUxOH0.-y_VFSiTIMfER3m77OQ4kTBWH2qL1nG_Hqw40rB54sZ_OsJ1zg-9CkWghVf12K6n02dBuibYtPGS-wbZ71PNZg");

    //   var requestOptions = {
    //     method: 'GET',
    //     headers: myHeaders,
    //     redirect: 'follow'
    //   };

    //   const response = await fetch("https://apiserver.dolf.finance/getDetailedBalance", requestOptions);
    //   console.log(response)

    // } catch (error) {
    //   console.log(error)
    //   console.log('fetch failed')
    // }

    console.log(' Demo fetch for now');
    return {
        total_balance: 0,
        idle_balance: 0,
        saving_balance: 0,
        staking_balance: 0,
        yesterday_earnings: null,
        lifetime_earnings: null,
        coin_balance: [
            {
                coin_id: 9,
                coin_name: 'Cardano',
                price: 0.464183,
                total_balance: null,
                idle_balance: null,
                saving_balance: null,
                staking_balance: null,
                yesterday_earnings: null,
                lifetime_earnings: null,
            },
            {
                coin_id: 8,
                coin_name: 'Polkadot',
                price: 6.89,
                total_balance: null,
                idle_balance: null,
                saving_balance: null,
                staking_balance: null,
                yesterday_earnings: null,
                lifetime_earnings: null,
            },
            {
                coin_id: 7,
                coin_name: 'Polygon',
                price: 0.813586,
                total_balance: null,
                idle_balance: null,
                saving_balance: null,
                staking_balance: null,
                yesterday_earnings: null,
                lifetime_earnings: null,
            },
            {
                coin_id: 6,
                coin_name: 'Solana',
                price: 32.7,
                total_balance: null,
                idle_balance: null,
                saving_balance: null,
                staking_balance: null,
                yesterday_earnings: null,
                lifetime_earnings: null,
            },
            {
                coin_id: 5,
                coin_name: 'Ethereum',
                price: 1464.05,
                total_balance: null,
                idle_balance: null,
                saving_balance: null,
                staking_balance: null,
                yesterday_earnings: null,
                lifetime_earnings: null,
            },
            {
                coin_id: 4,
                coin_name: 'Bitcoin',
                price: 19774.16,
                total_balance: null,
                idle_balance: null,
                saving_balance: null,
                staking_balance: null,
                yesterday_earnings: null,
                lifetime_earnings: null,
            },
            {
                coin_id: 3,
                coin_name: 'DAI',
                price: 1.0,
                total_balance: null,
                idle_balance: null,
                saving_balance: null,
                staking_balance: null,
                yesterday_earnings: null,
                lifetime_earnings: null,
            },
            {
                coin_id: 2,
                coin_name: 'USD Coin',
                price: 1.001,
                total_balance: null,
                idle_balance: null,
                saving_balance: null,
                staking_balance: null,
                yesterday_earnings: null,
                lifetime_earnings: null,
            },
            {
                coin_id: 1,
                coin_name: 'Tether',
                price: 1.001,
                total_balance: null,
                idle_balance: null,
                saving_balance: null,
                staking_balance: null,
                yesterday_earnings: null,
                lifetime_earnings: null,
            },
            {
                coin_id: 11,
                coin_name: 'BUSD',
                price: 1.001,
                total_balance: null,
                idle_balance: null,
                saving_balance: null,
                staking_balance: null,
                yesterday_earnings: null,
                lifetime_earnings: null,
            },
            {
                coin_id: 10,
                coin_name: 'BNB',
                price: 275.52,
                total_balance: null,
                idle_balance: null,
                saving_balance: null,
                staking_balance: null,
                yesterday_earnings: null,
                lifetime_earnings: null,
            },
        ],
    };
};

export default Tables;
