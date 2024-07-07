import { Component } from 'react';

interface IProps {
  data: string;
  count: number;
}

export default class BottomSection extends Component<IProps> {
  render() {
    const arr = JSON.parse(this.props.data);
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

    return (
      <section id="bottom_section" className={`${this.props.count}`}>
        <div id="listOfResults">{wholeList}</div>
      </section>
    );
  }
}
