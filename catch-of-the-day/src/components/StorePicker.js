import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = (e) => {
    // 1. stop form from submitting
    e.preventDefault();
    // 2. get the text from that input
    const storeName = this.myInput.current.value;
    // 3. change page to /store/whatever-they-put-in
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    console.log(this);
    return (
      <form className='store-selector' onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <button onClick={this.handleClick}>Click Me!</button>
        <input
          type='text'
          ref={this.myInput}
          required
          placeholder='Store Name'
          defaultValue={getFunName()}
        />
        <button type='submit'>Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
