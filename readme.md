# Vefforritun 2 2021 - Verkefni 1

## Nemandi

- Nafn: Arnar Ingi Njarðarson
- Netfang: ain1@hi.is
- Kennitala: 050797-2609
- Github: arninja

## Mikilvægar upplýsingar

Óli tók það fram að nemendur mættu hjálpast að með útfærslu á útliti (CSS/SASS).

Þar að auki tók hann fram að lausnir á hópverkefni 2 frá 2020 (sem verkefnið byggist á) séu ekki aðgengilegar nemendum þessa námskeiðs (Líklega vegna þess að hann kenndi ekki áfangann á síðasta ári). Ég tók eftir að allar aðrar lausnir á hópverkefni 2 í Vefforritun 1 voru aðgengilegar í tilsvarandi repo-um *svo ég gerði ráð fyrir að um mistök fyrri kennara hafi verið að ræða*.

**Meirihluti** nemenda í áfanganum (núna) tóku **Vefforritun 1 á síðasta misseri**. Þau hafa beinan aðgang að sinni lausn frá árinu á undan **en ekki þeir nemendur sem tóku ekki áfangann það árið**. Því spurðist ég fyrir hvort ég gæti fengið aðgang að H2 verkefnislausn frá nemanda sem tók áfangann í fyrra. Það tók sinn tíma að finna nemanda en að lokum tókst það. Jóhannes Kári Sólmundarson nemandi í þessu námskeiði veitti mér aðgang að H2 sýnilausn sýns hóps og gaf mér leyfi til að nota CSS/SASS þaðan með því skilyrði að ég myndi láta vita af því (sem ég er að gera núna).

Því notaðist ég við eftirfarandi [repo](https://github.com/Gitcelo/vef1-2020-h2) mér til aðstoðar (svo ég þyrfti ekki að gera H2 frá grunni).

## Vandamál sem komu upp

1. **Github vandamál**

   1. Ég lenti í vandræðum með að tengja verkefnið við github þegar ég var kominn áleiðis með verkefnið. Ég notaðist við lýsingu á [þessum](https://github.com/vefforritun/vef2-2019-v1) github link sem virkaði bara alls ekki. Eftir stanslaust bras í tvo daga fékk ég frá samnemanda að betra væri að nota [þennan](https://github.com/vefforritun/vef1-2020-v6) link.

   2. Ástæðan fyrir því að ég útskýri þetta allt saman er sú að þetta kostaði mig dýrmætan tíma og varð til þess að ég skila verkefninu ekki fullunnu af mér. [Slóð á gamalt repo](https://github.com/arninja/Vefforritun_II/). Hér má sjá að ég byrjaði á verkefninu mun fyrr en commits á þessu repo sýna.

2. **Fæ ekki CSS/SASS til að virka á localhost (Finn ekki villuna)**

   1. Ég fæ ekki útlitið frá verkefninu sem ég klónaði inn í mitt verkefni til að virka (CSS/SASS er óvirkt í verkefninu). Það hefur valdið mér talsverðum höfuðverk.

   2. Hef ákveðnar hugmyndir hvað geti verið að *module.exports = router* - neðsta línan í *app.js* skránni virðist ekki virka.

3. **public/img mappan kom ekki með þegar ég klónaði verkefnið fyrst**

   1. **Í fyrsta lagi** veit ég ekki hvort Óli hefur gleymt að láta möppuna inn, **í öðru lagi** gæti ég hafi óvart eytt henni og **loks** getur verið að hún hafi ekki átt að vera. Hún var í H2 allavegana...
   2. Þar sem ég fæ ekki útlitið inn í verkefnið geri ég mér ekki grein fyrir því hvort þetta hafi áhrif á verkefnið. Ég færði `public/img`möppuna inn um leið og ég fékk villur við vinnu á ejs skrám, undir views.

## Útfærsla

*Fyrirlesa skal lesa _asynchronously_ af disk með callbacks, promises eða `async await`. Nota þarf `fs` pakkann í node.*

- Ég leysti þetta í `src/videos.js` skránni, notaðist við föll úr [Sýnilausn á verkefni 1 2019](https://github.com/vefforritun/vef2-2019-v1-synilausn) og breytti sumum nöfnum (`videoPage()`, `videoHome()`, `readJSON()`, `catchErrors(fn)`)
- Loks bjó ég til `videoSearchFor(videos, id)` fall sem leitar að tilteknu id.

*Notast skal við [EJS template](https://github.com/mde/ejs) til að útbúa HTML. Útbúa skal `header.ejs` og `footer.ejs` sem önnur template nota. `views/` mappa ætti að innihalda template skrár.*

- Notaðist við uppsetningu á eftirfarandi [repo](https://github.com/vefforritun/vef2-2019-v1-synilausn/tree/master/views) (fyrir error.ejs, `footer.ejs`, `header.ejs`, `video.ejs` og `videos.ejs`) og nýtti upplýsingarnar úr [H2 verkefni sem ég fékk](https://github.com/Gitcelo/vef1-2020-h2)

*Setja skal upp villumeðhöndlun fyrir almennar villur og ef beðið er um slóð sem ekki er til (404). Skilaboð skulu birt notanda um hvað gerðist („Síða fannst ekki“ – „Villa kom upp“).*

- Sjá `notFoundHandler(req, res, next)` og `errorHandler(err, req, res, next)` í `app.js`
- Sjá `catchErrors(fn)`
- Öll þessi föll voru fengin úr sýnilausn á verkefni 1 í Vefforitun 2 [2019](https://github.com/vefforritun/vef2-2019-v1-synilausn) sem Óli benti okkur á

*`app.js` skal setja upp Express vefþjón en virkni fyrir myndbönd skal útfærð í `src/videos.js`.*

- Sjá `app.js` og `src/videos.js`

*Nota skal `app.locals` til að gera föll aðgengileg í EJS template til að forma aldur og tíma lengd. Þau ættu að eiga heima undir `./src`.*

- Sjá línu 10 í `app.js`, vísar í `./src/util.js`;

*`public/` inniheldur þau gögn sem ættu að vera aðgengileg með _static middleware_ í express. CSS ætti að vera geymt í þessari möppu. `public/videos/` inniheldur myndir og video sem `videos.json` vísar í.*

- Öll gögn eru aðgengileg í express (nema kannski CSS/SASS víst að þau koma ekki)
- Public mappan inniheldur `/img` möppu sem inniheldur myndir, `videos` sem inniheldur myndböndin ásamt myndum og loks `styles.css`.

*Öll dependency skulu skráð í `package.json` sem `devDependency` eða `dependency`, eftir því hvað við á.*

- Í `dependency` skráði ég `ejs` og `express`.
- Í `devDependency` skráði ég `concurrently`, `eslint`, `eslint-config-airbnb-base`, `eslint-plugin-import`, `nodemon`, `stylelint`, `stylelint-config-sass-guidelines` og `stylelint-config-standard`.
- Í `scripts` skráði ég `test:eslint`, `test:stylelint`, `sass`, `test` og `start`.

*`npm start` skal keyra upp vefþjón á `localhost` porti `3000`.*

- Notaði `console.info(`Server running at http://${hostname}:${port}/`);` til að prenta út slóðina, tók hana út svo npm test keyrir rétt án warning. Hér er [linkur](http://127.0.0.1:3000/) á slóðina eftir `npm start`

## Fyrir yfirferð á verkefninu

- `npm install` keyrt fyrst sem sækir öll dependency
- `npm start` á að keyra upp express vefþjón á porti `3000`
- `npm test` sem á að keyra eslint og stylelint, og sýna engar villur

## Yrði þakklátur fyrir

Að dæmatímakennari geti sagt mér hvað mér yfirsást varðandi CSS/SASS virknina.
