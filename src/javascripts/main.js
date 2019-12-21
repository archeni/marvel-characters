import 'bootstrap';
import '../styles/main.scss';
import printCard from './components/printCards';

const init = () => {
  printCard.xButtonEventFunc();
  printCard.avengerButtonEventFunc();
  printCard.guardiansButtonEventFunc();
};

init();
