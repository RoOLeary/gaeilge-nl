---
pubDate: 2025-01-28
title: Conas dátaí a chur i gcomparáid i JavaScript
slug: how-to-compare-dates-in-javascript
date: 2025-10-02T10:56:00.000+02:00
thumbnail: /uploads/image-11-.png
rating: 5
author: ronan-o-laoire
lang: ga
tags:
  - javascript
faq:
  - question: Ceist
    answer: Freagair
hero: /images/javascript-logo-banner.jpg
description: Conas dátaí a chur i gcomparáid go dúchais i JavaScript ag úsáid an réada Date, gan leabharlanna tríú páirtí ar bith a úsáid.
---
Is féidir le hobair le dátaí i JavaScript a bheith castasach, chun an rud is ísle a rá. Le déanaí, bhí orm dhá dháta a chur i gcomparáid lena chéile chun a fháil amach cé acu a bhí níos mó ná, níos lú ná, srl.

I mo chás féin, bhí mé ag úsáid roghnóra dáta a bhí ag tabhairt teaghráin ar nós `01/28/2025`. Bhí orm seiceáil an raibh an dáta seo `>=` leis an lá inniu.

An chéad rud a bhí le déanamh agam ná an teaghrán seo a thiontú ina réad Date i JavaScript.


```js
const date: new Date("01/28/2025");
console.log(date);
// Tue Jan 28 2025 00:00:00 GMT-0500 (Eastern Standard Time)
```

Ansin, cuir an dáta seo i gcomparáid leis an lá inniu:

```js
const compareDate = new Date("01/28/2025");
const today = new Date();
console.log(compareDate >= today);
// false
```

Is é an fhadhb ná, cé go bhfuil na dátaí céanna, níl na hamanna céanna.

```js
const compareDate = new Date("01/28/2025");
const today = new Date();
console.log("compareDate: ", compareDate);
console.log("today: ", today);
// compareDate:  Tue Jan 28 2025 00:00:00 GMT-0500 (Eastern Standard Time)
// today:  Tue Jan 28 2025 21:33:27 GMT-0500 (Eastern Standard Time)
```

Tabhair faoi deara go bhfuil na huaireanna ar compareDate uile nialasach. Is é an difríocht ama is cúis leis an teip sa chomparáid. Chun é seo a réiteach, ní mór dúinn an “lá inniu” a chruthú gan am. Déanaimid é sin trí réad Date nua a chruthú agus an bhliain, an mhí, agus an lá a rith isteach ina n-aonar.

```js
const todayWithoutTime = new Date(
  new Date().getFullYear(),
  new Date().getMonth(),
  new Date().getDate()
);
console.log("todayWithoutTime: ", todayWithoutTime);
// todayWithoutTime:  Tue Jan 28 2025 00:00:00 GMT-0500 (Eastern Standard Time)
```

Mar sin, déanaimis an chomparáid arís.

```js
const compareDate = new Date("01/28/2025");
const todayWithoutTime = new Date(
  new Date().getFullYear(),
  new Date().getMonth(),
  new Date().getDate()
);
console.log(compareDate >= todayWithoutTime);
// true
```

Sin é. Cuimhnigh: agus dátaí á gcur i gcomparáid i JavaScript, tá sé riachtanach an t-am a chur san áireamh.
