import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/Modal.css';

import Tab from '../components/Tab';
import Content from '../components/Content';

import { updateTab, deleteTab, createTab } from '../reducers/modal';

class Modal extends Component {
  render() {
    console.log(this.props.tabs);

    return (
      <div id="modal">
        <table cellPadding="0" cellSpacing="0" border="0">
          <tbody>
            <tr>
              <td>
                {this.props.tabs.map((item) => {
                  return (<Tab key={item.id} id={item.id} content={item.content} handleOnDelete={this.props.handleOnDelete} />);
                })}
              </td>
              <td>
                {this.props.tab ? (
                  <Content id={this.props.tab.id} content={this.props.tab.content} handleOnChange={this.props.handleOnChange}/>
                ) : null}
              </td>
            </tr>
            <tr>
              <td>
                <button onClick={this.props.handleNewTab}>Add new</button>
              </td>
              <td>
                <span> {this.props.tabs.length} tab(s)</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('map', state);
  return {
    tabs: state.modal.tabs,
    tab: state.match ? state.modal.tabs.find((item) => {
      return item.id === state.match.params.id;
    }) : {}
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleOnChange: (event) => {
      const id = event.currentTarget.getAttribute('data-tab-id');
      const content = event.currentTarget.value;

      return dispatch(updateTab(id, content));
    },
    handleNewTab: () => {
      return dispatch(createTab());
    },
    handleOnDelete: (event) => {
      const id = event.currentTarget.getAttribute('data-tab-id');

      return dispatch(deleteTab(id));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
