var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var a = [
        {
          id: 1,
          text: "1111קטגוריה 1",
          href: "https://vuetifyjs.com/components/api-explorer",
          img: "https://www.ezcount.co.il/wp-content/uploads/2019/10/cash-reduce-law.jpg",
          Description: "במהלך החודש",
          amunt: 1900,
        },
        {
          id: 2,
          text: "קטגוריה 2",
          href: "https://vuetifyjs.com/getting-started/pre-made-layouts",
          img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMebAueznS_yOQQS_Un2PzOxNiHQOP__MSPQ&usqp=CAU",
          Description: "חודשי",
          amunt: 12000,
        },
        {
          id: 3,
          text: "קטגוריה 3",
          href: "https://www.imaclub.co.il/files/stories/saving_l.jpg",
          img: "https://www.yeshbit.co.il/wp-content/uploads/2020/08/%D7%A4%D7%AA%D7%A8%D7%95%D7%A0%D7%95%D7%AA-%D7%97%D7%99%D7%A1%D7%9B%D7%95%D7%9F-%D7%9C%D7%9B%D7%A1%D7%A3-%D7%A4%D7%A0%D7%95%D7%99.jpg",
          Description: "במהלך השנה",
          amunt: 6500,
        },
        {
          id: 4,
          text: "קטגוריה 4",
          href: "https://www.imaclub.co.il/files/stories/saving_l.jpg",
          img: "https://www.yeshbit.co.il/wp-content/uploads/2020/08/%D7%A4%D7%AA%D7%A8%D7%95%D7%A0%D7%95%D7%AA-%D7%97%D7%99%D7%A1%D7%9B%D7%95%D7%9F-%D7%9C%D7%9B%D7%A1%D7%A3-%D7%A4%D7%A0%D7%95%D7%99.jpg",
          Description: "במהלך השנה",
          amunt: 6500,
        },
      ]
  res.send(a);
});

module.exports = router;
