'use client'

import React, { useState } from 'react';

const Profile = () => {
  const [text, setText] = useState('');

  return (
    <div>
      <h2>Profile</h2>

      <input type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  )
}

export default Profile
