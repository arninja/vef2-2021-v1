# Vefforritun 2 2021 - Verkefni 1

### Nemandi

- Nafn: Arnar Ingi Njarðarson
- Netfang: ain1@hi.is
- Kennitala: 050797-2609
- Github notendanafn: arninja

### Mikilvægar upplýsingar

    Óli tók það fram að nemendur mættu hjálpast að með útfærslu á útliti (CSS/SASS).

    Þar að auki tók hann fram að lausnir á hópverkefni 2 frá 2020 (sem verkefnið byggist á) séu ekki aðgengilegar nemendum þessa námskeiðs (Líklega vegna þess að hann kenndi ekki áfangann á síðasta ári). Ég tók eftir að allar aðrar lausnir á hópverkefni 2 í Vefforritun 1 voru aðgengilegar í tilsvarandi repo-um *svo ég gerði ráð fyrir að um mistök fyrri kennara hafi verið að ræða*.

    **Meirihluti** nemenda í áfanganum (núna) tóku **Vefforritun 1 á síðasta misseri**. Þau hafa beinan aðgang að sinni lausn frá árinu á undan **en ekki þeir nemendur sem tóku ekki áfangann það árið**. Því spurðist ég fyrir hvort ég gæti fengið aðgang að H2 verkefnislausn frá nemanda sem tók áfangann í fyrra. Það tók sinn tíma að finna nemanda en að lokum tókst það. Jóhannes Kári Sólmundarson nemandi í þessu námskeiði veitti mér aðgang að H2 sýnilausn sýns hóps og gaf mér leyfi til að nota CSS/SASS þaðan. 

    Því notaðist ég við eftirfarandi [repo](https://github.com/Gitcelo/vef1-2020-h2) mér til aðstoðar (svo ég þyrfti ekki að gera allt frá grunni).

### Vandamál sem ég rakst á við vinnu verkefnisins

1. **Github vandamál**

   1. Ég lenti í vandræðum með að tengja verkefnið við github þegar ég var kominn áleiðis með verkefnið. Ég notaðist við lýsingu á [þessum](https://github.com/vefforritun/vef2-2019-v1) github link sem virkaði bara alls ekki. Eftir stanslaust bras í tvo daga fékk ég frá samnemanda að betra væri að nota [þennan](https://github.com/vefforritun/vef1-2020-v6) link.

   2. Ástæðan fyrir því að ég útskýri þetta allt saman er sú að þetta kostaði mig dýrmætan tíma og varð til þess að ég skila verkefninu ekki fullunnu af mér. [Slóð á gamalt repo](https://github.com/arninja/Vefforritun_II/). Hér má sjá að ég byrjaði á verkefninu mun fyrr en commits á þessu repo sýna.

2. **Fæ ekki CSS/SASS til að virka á localhost (Finn ekki villuna)**

   1. Ég fæ ekki útlitið frá verkefninu sem ég klónaði inn í mitt verkefni til að virka (CSS/SASS er óvirkt í verkefninu). Það hefur valdið mér talsverðum höfuðverk.

   2. Hef ákveðnar hugmyndir hvað geti verið að *module.exports = router* - neðsta línan í *app.js* skránni virðist ekki virka.

3. **public/img mappan kom ekki með þegar ég klónaði verkefnið fyrst**

   1. Þar sem ég fæ ekki útlitið inn í verkefnið geri ég mér ekki grein fyrir því hvort þetta hafi áhrif á verkefnið. Ég færði möppuna inn um leið og ég fékk villur við vinnu á ejs skrám (undir views)

### Verkefnislýsing

  


* `npm install` keyrt fyrst sem sækir öll dependency
* `npm start` á að keyra upp express vefþjón á porti `3000`
* `npm test` sem á að keyra eslint og stylelint, og sýna engar villur