import React, {Component} from 'react';
import './Sidebar.css';

export default class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">
        <div className="name">
          Ian Knox
        </div>
        <div className="sub">
          <div className="title">
            Developer
          </div>
          <div className="city">
            Denver, CO
          </div>
        </div>
      </div>
    );
  }
}