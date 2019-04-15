import React from 'react';

const styles = {
  borderBottom: '2px solid #eee',
  background: '#fafafa',
  margin: '.75rem auto',
  padding: '.6rem 1rem',
  maxWidth: '500px',
  borderRadius: '7px'
};

class Uuid extends React.Component {
  render() {
    return (
      <div style={ styles }>
        <h2>{ this.props.data }</h2>
      </div>
    );
  }
}

export default Uuid;