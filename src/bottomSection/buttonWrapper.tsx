import { getInfo } from './getInfo';
import { Counter } from './counter';

export default function ButtonWrapper() {
  return (
    <form id="buttonWrapper">
      <input
        id="buttonPrevious"
        type="button"
        value="Previous"
        onClick={() => {
          Counter.minus();
          getInfo(`?page=${Counter.getCount()}`);
        }}
      />
      <input
        id="buttonNext"
        type="button"
        value="Next"
        onClick={() => {
          Counter.plus();
          getInfo(`?page=${Counter.getCount()}`);
        }}
      />
    </form>
  );
}
