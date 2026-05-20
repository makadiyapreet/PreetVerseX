import React, { useEffect, useState } from 'react'
import './Blog.css'

const BLOGGER_RSS = 'https://makadiyapreet.blogspot.com/feeds/posts/default?alt=json&max-results=6'

export default function Blogs() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(BLOGGER_RSS)
      .then(r => r.json())
      .then(data => {
        const entries = data.feed.entry || []
        setPosts(entries.map(e => ({
          title: e.title.$t,
          link: e.link.find(l => l.rel === 'alternate')?.href,
          date: new Date(e.published.$t).toLocaleDateString('en-IN', {
            year: 'numeric', month: 'short', day: 'numeric'
          }),
          summary: e.summary?.$t?.replace(/<[^>]+>/g, '').slice(0, 150) + '...',
        })))
      })
      .catch(() => setPosts([]))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="blogs-section">
        <h2 className="blogs-heading">Latest Posts</h2>
        <div className="blog-loading">Loading posts...</div>
      </div>
    )
  }

  if (posts.length === 0) {
    return (
      <div className="blogs-section">
        <h2 className="blogs-heading">Blog</h2>
        <p className="blogs-fallback-text">
          I love documenting my tech journey — from AI and machine learning experiments
          to cybersecurity insights.
        </p>
        <a
          href="https://makadiyapreet.blogspot.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
          data-cursor
        >
          Visit My Blogsite →
        </a>
      </div>
    )
  }

  return (
    <section className="blogs-section">
      <h2 className="blogs-heading">Latest Posts</h2>
      <div className="blog-grid">
        {posts.map((post, i) => (
          <a
            key={i}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="blog-card"
            data-cursor
          >
            <span className="blog-date">{post.date}</span>
            <h3 className="blog-title">{post.title}</h3>
            <p className="blog-summary">{post.summary}</p>
            <span className="blog-read-more">Read more →</span>
          </a>
        ))}
      </div>
    </section>
  )
}
