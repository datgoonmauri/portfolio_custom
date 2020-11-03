import React from 'react'
import PortfolioItem from '../modules/PortfolioItem'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.id
    this.state = {
      portfolio: [{
        img: '//bulma.io/images/placeholders/800x480.png',
        title: 'Instagram_Clone',
        description: 'Lorem ipsum dolor sit amet, modus timeam no quo. Per ne splendide posidonium deterruisset.',
        github: '//www.github.com',
        href: '#'
      }, {
        img: '//bulma.io/images/placeholders/800x480.png',
        title: 'Kwitter',
        description: 'Lorem ipsum dolor sit amet, modus timeam no quo. Per ne splendide posidonium deterruisset.',
        href: '#'
      }, {
        img: '//bulma.io/images/placeholders/800x480.png',
        title: 'GammerTagged',
        description: 'Lorem ipsum dolor sit amet, modus timeam no quo. Per ne splendide posidonium deterruisset.'
      },  {
        img: '//bulma.io/images/placeholders/800x480.png',
        title: 'Connect Four',
        description: 'Lorem ipsum dolor sit amet, modus timeam no quo. Per ne splendide posidonium deterruisset.',
        href: '#'
      }
    ]
    };
  }

  render() {
    const portfolio = this.state.portfolio;

    return (
      <section className="section has-background-light" id={this.id}>
        <div className="section-heading has-text-centered">
          <h3 className="title has-text-black-darker">Design Lab</h3>
        </div>
        <div className="container">
          <div className="columns is-multiline">
            { portfolio === null ? 'what.' :
              portfolio.map((p, i) =>
                <div key={i} className="column is-4-desktop is-half-tablet">
                  <PortfolioItem {...p} />
                </div>
              )
            }
          </div>
        </div>
        <div className="section-footer has-text-centered">
          <h3 className="title has-text-black-darker">See More</h3>
          <div className="buttons">
            <a href="https://www.codepen.io" target="_blank" rel="noopener noreferrer"
              className="button button-special is-rounded is-medium is-link">CodePen.io</a>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer"
              className="button button-special is-rounded is-medium is-link">GitHub</a>
          </div>
        </div>
      </section>
    )
  }
}
