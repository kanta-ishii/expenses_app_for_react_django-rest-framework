import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';

type Props = {};
type State = {
  data: any,
  loaded: boolean,
  placeholder: string
};

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading"
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/api/v1/")
      .then(response => {
        if (response.status > 400) {
          return this.setState({ placeholder: "Something went wrong!" });
        }
        return response.json();
      })
      .then(data => {
        this.setState({
            data,
            loaded: true
        });
      });
  }

  render() {
    return (
      <ul>
        {this.state.data.map((contact: any)=> {
          return (
            <li key={contact.id}>
              {contact.store_name} - {contact.purchase_on} - {contact.is_income} - {contact.price}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default App;

const container: any = document.getElementById("app");
const root = createRoot(container);
root.render(
  <App />,
);

// expenses-list.component