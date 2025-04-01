import '../style.css';

export default function RootLayout({
  notifications,
  sectiona,
  sectionb,
  children,
  login
}: {
  notifications: React.ReactNode,
  sectiona: React.ReactNode,
  sectionb: React.ReactNode,
  children: React.ReactNode,
  login: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {true ?
          <div>
            {notifications}
            {sectiona}
            {sectionb}
            {children}
          </div> :
          <div>
            {login}
          </div>
        }
      </body>
    </html>
  )
}
