import React, {Component} from 'react';
import Title from '../Title';
import SectionList from '../SectionList'
import './Sidebar.css';

export default class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">
        <Title />
        <SectionList />
      </div>
    );
  }
}