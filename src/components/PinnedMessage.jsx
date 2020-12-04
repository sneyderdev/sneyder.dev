import React from 'react';

const PinnedMessage = ({ message }) => {
  return (
    <div>
      <section className='pinned-message'>
        <p className='pinned-message__text slideUp delay-2'>{message}</p>
      </section>
    </div>
  );
};

export default PinnedMessage;
