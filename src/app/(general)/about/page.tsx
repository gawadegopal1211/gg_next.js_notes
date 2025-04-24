import { cookies } from 'next/headers'
import React from 'react'

export const metadata={
  title:"About",
  description:"About the Next.js"
}

const About = async () => {
  const cookieStore = await cookies();
  const theme=cookieStore.get("theme");
  console.log(theme);
  
  return (
    <div>
      <h2>About us</h2>
    </div>
  )
}

export default About
