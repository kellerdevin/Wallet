const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json(
        {
            blockinfo: '0x627306090abab3a6e140...',

            prodTitle: "2016 Louis Vuitton Keepall",
            subTitle: "Classic Monogram",
            prodimg: "https://a.1stdibscdn.com/archivesE/upload/1121189/v_34701811510039784334/3470181_master.jpg?width=500",
            
            TxHash: "0xfe3848c051023e29cc62843e090e5a5b849ec6eb8ad98bfc8e28af2551116701",
            Status: "Success",
            BlockHeight: "3484864 (5797 block confirmations)",
            TimeStamp: "(Jun-21-2018 09:57:07 PM +UTC)",
            From: "0x9c3e099eb426e48504b7dedfea66824668ec87e0",
            For: "Contract 0x16c31228f6413043ac0e41e9617394906c7a21ac",
            TokenTransfer: "2 ERC20 (Twoken Token) from 0x00000000000000... to 0x9c3e099eb426e4",
            Value: '0 Ether ($0.00)',
            GasLimit: '320854',
            GasUsedByTxn: '213903',
            GasPrice: '0.000000001 Ether (1 Gwei)',
            ActualTxCostFee: "0.000213903 Ether ($0.000000)",
            NoncePosition: "6 | {10}",
            InputData: "/-ë@9Keepall 45 year: 2016, manufacturer: LV, date:6/21/2018",



            RAP1T: "Jaeger-LeCoultre Polaris",
            RAP1ST: "Chronograph, PINK GOLD",
            RAP1img: "https://www.laingsuk.com/media/catalog/product/cache/1/image/1200x/9df78eab33525d08d6e5fb8d27136e95/0/3/0350020091_2.jpg",

            RAP2T: "Hermes Birkin",
            RAP2ST: "30cm Craie Epsom Birkin",
            RAP2img: "https://item5.tradesy.com/images/hermes-birkin-30cm-epsom-gold-hardware-off-white-summer-a-stamp-craie-leather-tote-21697794-0-1.jpg?width=720&height=960",

            RAP3T: "Louis Vuitton / Supreme",
            RAP3ST: "Christopher Backpack PM",
            RAP3img: "https://select-orlando.com/wp-content/uploads/2017/11/mWHITEBACKGROUND.jpg",

            Hash: '0x5e4bb521e0b6c18bd40674474f4b1527...',
            toYou: '0x6bd2bd4fa7ec27ef0...',
            FromTrans: '0xb35f68a5d0da29ds2...',
            TextTo: '0x6bd2bd4fa7ec27ef0...',


            DateToYou: '4/1/2018',
            DateTrans: '3/15/2017',
            DateCreated: '4/26/2016',

            Merchant: 'Louis Vuitton'
        },

    );
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: "Handling POST requests to /products"
    });
});

module.exports = router;