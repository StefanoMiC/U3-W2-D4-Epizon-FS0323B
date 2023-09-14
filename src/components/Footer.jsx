import { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { cartLength: state.cart.content.length };
};

const mapDispatchToProps = dispatch => {
  return {
    setAdmin: str => {
      dispatch({ type: "SET_ADMIN", payload: str });
    }
  };
};

class Footer extends Component {
  render() {
    return (
      <footer className="epizon-footer" onClick={() => this.props.setAdmin("Stefano")}>
        <span className="text-muted">Epizon {new Date().getFullYear()}©</span>
        <span>Cart content: {this.props.cartLength}</span>
      </footer>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
