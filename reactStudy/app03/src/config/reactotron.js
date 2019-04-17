import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

// if (process.env.NODE_ENV === 'development') {
//   const reactotron = Reactotron;

//   reactotron.connect();

//   const tron = Reactotron.configure().use(reactotronRedux()).connect;

//   console.tron = tron;
// }

const reactotron = Reactotron.configure()
  .use(sagaPlugin())
  .use(reactotronRedux()) //  <- here i am!
  .connect(); // Don't forget about me!
reactotron.clear();

export default reactotron;
