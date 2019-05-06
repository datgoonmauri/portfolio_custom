import React from 'react'
import ScrollComponent from '../modules/ScrollComponent'
import 'bulma-timeline/dist/css/bulma-timeline.min.css';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      work: [{
        content: "Web Architect - Google",
        date_formatted: "October 2018",
        line_type: "primary",
        marker_type: "info",
        skills: "Javascript,MSSQL,Web Design,Docker,Python",
        start_date: "2018-10-01"
      }, {
        content: "PHP Developer - Facebook",
        date_formatted: "July 2016",
        line_type: "primary",
        marker_type: "info",
        skills: "PHP,Docker",
        start_date: "2016-07-01"
      }, {
        content: "Texas A&M - Bachelor of Science",
        date_formatted: "May 2016",
        line_type: "primary",
        marker_type: "info",
        skills: "Computer Science",
        start_date: "2016-05-10"
      }]
    };
  }

  render() {

    return (
      <section className="section" id="resume">
        <div className="section-heading has-text-centered">
          <h3 className="title has-text-black-darker">Work Experience</h3>
        </div>
        <div className="container">
          <div className="timeline is-centered">
            <header className="timeline-header">
              <span className="tag is-medium is-info">Now</span>
            </header>
            {
              this.state.work.map((w, i, arr) => {
                return (
                  <React.Fragment key={i} >
                    { i > 0 ? (
                      new Date(arr[i-1].start_date).getYear() !== new Date(w.start_date).getYear() ?
                      <ScrollComponent tagName="header" className="timeline-header">
                        <span className="tag is-danger">{new Date(w.start_date).getFullYear()}</span>
                      </ScrollComponent> : ''
                    ) : '' }
                    <ScrollComponent className={"timeline-item is-"+w.line_type}>
                      <div className={"timeline-marker is-"+w.marker_type}>
                      </div>
                      <div className="timeline-content">
                        <p className="heading" style={{fontSize:'12px',marginBottom:'2px'}}>{w.date_formatted}</p>
                        <p style={{marginBottom:'4px'}}>{w.content}</p>
                        <p>{w.skills.split(',').map((s, j) =>
                          <span key={j} className="tag" style={{fontSize:'13px'}}>{s}</span>
                        )}</p>
                      </div>
                    </ScrollComponent>
                  </React.Fragment>
                )
              })
            }
          </div>
          <div className="section-footer has-text-centered">
            <h3 className="title has-text-black-darker">Learn More</h3>
            <div className="buttons">
              <a className="button is-info is-rounded button-special"
                target="_blank" rel="noopener noreferrer"
                href="#home"
              >
                <span>Resume</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
