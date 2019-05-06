import React from 'react'
import ProfileCard from '../modules/ProfileCard'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.id
    this.state = {
      profile: {
        name: 'Joe Shmo',
        current_loc: 'Austin, TX',
        job_title: 'Web Developer',
        emp_site: '//www.google.com',
        emp_name: 'Google'
      }
    };
  }

  render() {
    const profile = this.state.profile;

    return (
      <section className="section" id={this.id}>
        <div className="section-heading has-text-centered">
          <h3 className="title">About</h3>
        </div>
        <div className="container">
          { profile === null ? 'Loading...' :
            <div className="columns is-multiline">
              <div className="column is-7-desktop">
                <article>
                  <p>Lorem ipsum dolor sit amet, quodsi theophrastus signiferumque
                  in est, paulo scaevola definitionem id mei. Te mazim integre qui,
                  ad erat vocibus scaevola mei. Ea eos vidit interesset, eum ne illum
                  adipiscing, iriure vulputate pro ne. Essent impetus ullamcorper
                  eos cu, qui ad nibh definiebas theophrastus. Pro aliquid pertinax
                  at. Constituto consetetur in vis, ad mei epicuri quaestio.</p>
                </article>
              </div>
              <div className="column is-5-tablet">
                <ProfileCard {...profile} />
              </div>
            </div>
          }
        </div>
      </section>
    )
  }
}
