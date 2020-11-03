import React from 'react'
import ProfileCard from '../modules/ProfileCard'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.id
    this.state = {
      profile: {
        name: 'Mauricio Alvarado',
        current_loc: 'Fremont. CA',
        job_title: 'Full Stack Software Engineer',
        emp_site: 'lhttp://inkedin.com/',
        emp_name: 'Linked In'
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
                  <p>My name is Mauricio Alvarado, I am 25 years young. I’ve been married to my Wife (she is also a Developer) for 5 years and together we have a wonderful son. I’ve always loved technology and thrived off puzzles and solving problems as a kid growing up in California’s Bay Area. I have an incredible curiosity for how things work and are made. In addition to that I feel learning is a key component in my life and to the way I approach many things and it has led me to where I am now.  I am a self-motivated and progress-driven Full Stack Web Developer with an eager necessity to contribute to the tech industry. I am incredibly adaptable and dynamic in and out of the workplace. I believe my conscientious and adept approach to programming will bring value to the company that decides to take me on as a part of their team
.                        The reason I’m so passionately pursuing this role is that I feel it perfectly aligns with my skills and interests.
Which I believe will help me achieve the most fulfillment in my life.
After many hours, days, and months of hard work, team collaboration, learning concepts, reading documentation, working with a scrum/agile team, after building many projects, using many frameworks,  the time I spent obtaining my certification from Kenzie Academy, has honed my skills and ability to be a Software Engineer. I believe I am an astute problem-solver capable of prioritizing and managing complex projects with proficiency. I exercised skills in critical thinking, observation and technical support and consistently contributed to team efforts and improvements. I am open-minded and focused on new developments in my field. I have proven to be effective and versatile, with proficiency in teamwork and collaborative work. I enjoy brainstorming and coordinating efforts to achieve a common goal 
</p>
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
