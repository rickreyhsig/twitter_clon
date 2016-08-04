
class Main extends React.Component {
    render() {
        return();
    }
}

let documentReady = () => {
    React.render(
      <Main/>,
      document.getElementById('react')
    );
};

$(documentReady);
