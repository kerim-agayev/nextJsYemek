import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
{/*font - awesome -dancing fonts */}
      <link 
        rel="preconnect" 
        href="https://fonts.googleapis.com"/>
        <link 
        rel="preconnect" 
        href="https://fonts.gstatic.com" 
        crossOrigin='true'/>
        <link 
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap" 
        rel="stylesheet"/>
        {/* font - awesome -dancing fonts*/}



        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,800;1,600;1,700;1,800&display=swap" rel="stylesheet"/>








      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
