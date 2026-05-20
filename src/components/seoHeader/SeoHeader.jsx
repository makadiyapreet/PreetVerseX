import React from 'react'
import { Helmet } from 'react-helmet'

export default function SeoHeader({ title, description, path }) {
  const base = "https://preetversex.netlify.app"
  const fullTitle = title
    ? title + ' | Preet Makadiya'
    : 'Preet Makadiya | Cybersecurity & AI Developer'
  const desc = description ||
    'Portfolio of Preet Makadiya — Cybersecurity professional, AI/Data Science developer, and full-stack engineer from Rajkot, Gujarat.'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={base + (path || '')} />
      <meta property="og:image" content={base + '/icons/desc.png'} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="keywords" content="Preet Makadiya, cybersecurity, ethical hacking, AI, data science, React, Django, portfolio, Rajkot, PDEU" />
    </Helmet>
  )
}
