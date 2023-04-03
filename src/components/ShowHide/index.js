import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  onFirstNameClick = () => {
    const {firstName} = this.state
    this.setState(() => ({firstName: !firstName}))
  }

  onLastNameClick = () => {
    const {lastName} = this.state
    this.setState(() => ({lastName: !lastName}))
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="name-container">
          <div className="container">
            <button
              type="button"
              className="btn"
              onClick={this.onFirstNameClick}
            >
              Show/Hide FirstName
            </button>
            {firstName ? <p className="name-card">Joe</p> : ''}
          </div>
          <div className="container">
            <button
              type="button"
              className="btn"
              onClick={this.onLastNameClick}
            >
              Show/Hide LastName
            </button>
            {lastName ? <p className="name-card">Jonas</p> : ''}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
