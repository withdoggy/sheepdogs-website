import React, { Component } from 'react';
import { ArticleRow } from './news';
export class NewsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
        articles: [
            {
                title: "Trening wiosenny w Starym Chrapowie",
                type: "event",
                description: "zapraszamy na treninng w dniach 2-3.03.2019 do starego chrapowa",
                photo: "http://kppp.ugu.pl/wp-content/uploads/2019/01/cropped-33027884_1782148738495704_562600905724133376_n.jpg"
            },
            {
                title: "Nowi członkowie stada HanczRancz",
                type: "news",
                description: "Na swiat przyszedł Krupion i Zymkol dzieci Kazimierza lub Kebaba. Bardzo sie cieszymu",
                photo: "http://kppp.ugu.pl/wp-content/uploads/2017/01/32822762_1530047310440026_1410030491897167872_n-300x200.png"
            }
            ,
            {
                title: "Nasz kanał na Youtube",
                type: "news",
                description: "uruchomilismy kanal na Youtube na ktorym znajdzieicie wiele ciekawych filmow",
                photo: "http://kppp.ugu.pl/wp-content/uploads/2019/01/32955536_1782148815162363_9065444225365049344_n-300x200.png"
            }
        ]
    };
  }
  renderNews() {
    return this.state.articles.map((article, index) => {
      return (
        <ArticleRow key={index} article={article} />
      )
    });
  }
  render() {
    const news = this.renderNews();
    return (
      <div className="news">
          { news }
      </div>
    );
  }
}
