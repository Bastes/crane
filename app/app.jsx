import React from 'react';
import reqwest from 'reqwest';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { companies: [] };
  }

  componentDidMount() {
    let context = this;
    reqwest('/api/companies.json', function (res) {
      context.setState({ companies: res.companies })
    })
  }

  render() {
    let companies = this.state.companies.map((item) => {
      return (<div className="company" key={item.id}>{item.name}</div>);
    });

    return (<div className="companies">{companies}</div>);
  }
}

export default App;
