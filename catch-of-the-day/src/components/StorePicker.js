import { getFunName } from '../helpers';

const StorePicker = () => (
  <form className='store-selector'>
    <h2>Please Enter A Store</h2>
    <input
      type='text'
      required
      placeholder='Store NAme'
      defaultValue={getFunName()}
    />
    <button type='submit'>Visit Store</button>
  </form>
);

export default StorePicker;
