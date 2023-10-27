import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Google  Web Fonts (Outfit) */}

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,200;0,9..40,300;0,9..40,800;0,9..40,900;1,9..40,100;1,9..40,400;1,9..40,500;1,9..40,700&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,700;0,900;1,200;1,400;1,500&family=Nunito+Sans:opsz,wght@6..12,300;6..12,600;6..12,800&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,700;1,200;1,500;1,600&family=Roboto+Condensed:ital,wght@0,300;1,400;1,700&family=Roboto:ital,wght@0,300;1,300;1,400&family=Rubik:ital,wght@0,400;0,500;0,700;1,400&display=swap" rel="stylesheet" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,200;0,9..40,300;0,9..40,800;0,9..40,900;1,9..40,100;1,9..40,400;1,9..40,500;1,9..40,700&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,700;0,900;1,200;1,400;1,500&family=Nunito+Sans:opsz,wght@6..12,300;6..12,600;6..12,800&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,700;1,200;1,500;1,600&family=Poppins:ital,wght@0,200;0,500;0,600;0,700;1,300;1,500;1,600&family=Roboto+Condensed:ital,wght@0,300;1,400;1,700&family=Roboto:ital,wght@0,300;1,300;1,400&family=Rubik:ital,wght@0,400;0,500;0,700;1,400&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
