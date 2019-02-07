import React, { Component } from 'react';
import { ArticleRow } from './row';
import { Timeline } from 'antd';
export class ArticleList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [
        {
          id: '1',
          title: 'Trening wiosenny w Starym Chrapowie',
          type: 'event',
          description: 'zapraszamy na treninng w dniach 2-3.03.2019 do starego chrapowa',
          photo:
            'http://kppp.ugu.pl/wp-content/uploads/2019/01/cropped-33027884_1782148738495704_562600905724133376_n.jpg',
        },
        {
          id: '2',
          title: 'Nowi członkowie stada HanczRancz',
          type: 'news',
          description:
            'Na swiat przyszedł Krupion i Zymkol dzieci Kazimierza lub Kebaba. Bardzo sie cieszymu iudfooufodf odoufsoufsuo fosusuoousfuosf oufsou fsousfoufsou sfousf ouofsuo sfou woi2oyo iqfiy feayoaefoi paupdusupodsf  fdpufdupafdupfda papuofdpufda xcpuoucx',
          photo:
            'http://kppp.ugu.pl/wp-content/uploads/2017/01/32822762_1530047310440026_1410030491897167872_n-300x200.png',
        },
        {
          id: '3',
          title: 'Nasz kanał na Youtube',
          type: 'news',
          description:
            'By walczyć z globalnym ociepleniem, około 200 państw przyjęło w Paryżu w 2015 roku porozumienie klimatyczne. Jego długoterminowym celem jest utrzymanie wzrostu średniej temperatury na świecie poniżej dwóch stopni Celsjusza ponad poziomem sprzed epoki przemysłowej. Jednocześnie zakłada się podjęcie starań, by ograniczyć wzrost globalnych temperatur do 1,5 stopnia Celsjusza, co znacznie obniżyłoby ryzyko i skutki zmiany klimatu. Założono też między innymi doprowadzenie do szybkiej redukcji emisji zgodnie z najnowszymi dostępnymi informacjami naukowymi.',
          photo:
            'http://kppp.ugu.pl/wp-content/uploads/2019/01/32955536_1782148815162363_9065444225365049344_n-300x200.png',
        },
      ],
    };
  }
  renderNews() {
    return this.state.articles.map((article, index) => {
      return <ArticleRow key={index} article={article} />;
    });
  }
  render() {
    const news = this.renderNews();
    return <Timeline>{news}</Timeline>;
  }
}
