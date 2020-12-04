import React from 'react';
import { autorun } from 'mobx';
import { observer } from 'mobx-react-lite';

import store from './store';

const App: React.FC = observer(() => {
  const { countStore, doubleStore } = store;
  autorun(() => {
    if (doubleStore.double) {
      console.log('Double' + doubleStore.double);
    }
    if (doubleStore.double === 8) {
      console.log('만약 value가 8이라면 0으로 초기화');
      doubleStore.value = 0;
    }
  });

  return (
    <div style={{ padding: '50px' }}>
      <h1>기존 방식</h1>
      <div>number: {countStore.number}</div>
      <button onClick={() => countStore.increase()}>plus</button>
      <button onClick={() => countStore.decrease()}>minus</button>

      <br />
      <br />

      <h1>mobX 6</h1>
      <div>double number: {doubleStore.value}</div>
      <button onClick={() => doubleStore.increment()}>increment</button>
    </div>
  );
});

export default App;
