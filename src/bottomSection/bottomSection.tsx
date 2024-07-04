import { Component } from 'react';

export default class BottomSection extends Component {
  getInfoFromLocal() {
    const results: string = localStorage.getItem('results');
    const arr = JSON.parse(results);
    let listOfresults;
    const wholeList = [];
    for (let i = 0; i < arr.length; i++) {
      listOfresults = (
        <div id="separateResult" key={`${i}`}>
          <div id="name">{'Name: ' + `${JSON.stringify(arr[i].name)}`}</div>
          <div id="gender">{'Gender: ' + `${JSON.stringify(arr[i].gender)}`}</div>
          <div id="height">{'Height: ' + `${JSON.stringify(arr[i].height)}`}</div>
          <div id="hair_color">{'Hair color: ' + `${JSON.stringify(arr[i].hair_color)}`}</div>
          <div id="birth_year">{'Birth year: ' + `${JSON.stringify(arr[i].birth_year)}`}</div>
          <div id="mass">{'Mass: ' + `${JSON.stringify(arr[i].mass)}`}</div>
        </div>
      );
      wholeList.push(listOfresults);
    }
    return <div id="listOfResults">{wholeList}</div>;
  }

  render() {
    return <section id="bottom_section"> {this.getInfoFromLocal()}</section>;
  }
}
