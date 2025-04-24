'use client'

import React, { useState } from 'react';
import { useTheme } from '@/app/theme-provider';

const Profile = () => {
  const [text, setText] = useState('');

  const theme = useTheme();
  console.log(theme.colors);

  return (
    <div>
      <h2>Profile</h2>
      <p>Theme: Primary: {theme.colors.primary} | Secondary: {theme.colors.secondary}</p>

      <input type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  )
}

export default Profile
