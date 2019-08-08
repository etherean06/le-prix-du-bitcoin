import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from "./cards/Card"
import "./cards/card.css"
import { monthName } from "../helper"
import Count from "../Components/count/Count"


const url = 'https://api.coingecko.com/api/v3/coins/bitcoin'

export default function Data() {
    const [price, setPrice] = useState();
    const [data, setData] = useState({ coin: [] });
    const [marketData, setMaketData] = useState();
    const [supply, setSupply] = useState();
    const [dev, setDev] = useState();
    const [commit, setCommit] = useState();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPrice = async () => {
            const result = await axios(url);
            setLoading(false)
            setPrice(result.data.market_data.current_price.eur);
            setSupply(result.data.market_data.circulating_supply);
            setMaketData(result.data.market_data.ath.eur);
            setDev(result.data.developer_data.forks);
            setCommit(result.data.developer_data.commit_count_4_weeks);
            setData(result.data);
        };
        fetchPrice();

    }, []);


    console.log(data)
    return (
        loading ? (
            <div>Loading...</div>
        ) :
            <>
                <h2>A Propos du Bitcoin</h2>
                <div className="flex-card">
                    <Card
                        name={"Le Prix du Bitcoin"}
                        desc={`${price} Euros`}
                    />
                    <Card
                        name={"Prochain Halving du Bitcoin"}
                        desc={<Count />}
                    />
                    <Card
                        name={"Le All Time High!"}
                        desc={`${marketData} Euros`}
                    />
                </div>
                <div className="flex-card">
                    <Card
                        name={"Classement au Market Cap"}
                        desc={`Le Bitcoin est #${data.market_cap_rank} `}
                    />
                    <Card
                        name={"Bitcoin en circulation"}
                        desc={`${supply} Millions`}
                    />
                    <Card
                        name={"Les Forks"}
                        desc={`il existe ${dev} Fork du Bitcoin `}
                    />
                </div>
            </>
    )
}
