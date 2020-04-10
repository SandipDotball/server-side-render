import React from 'react';

function HomePage() {
  return (
    <div>
      This is a Home page Component Hello baby
      <button onClick={() => console.log('Hi')}>CLick</button>
    </div>
  );
}

export default {
  component: HomePage,
};
