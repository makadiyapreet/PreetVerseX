import React, { useState, useEffect } from 'react'
import './GithubCalendar.css'

const GITHUB_USERNAME = 'makadiyapreet'

export default function GithubActivity() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch contribution data via GitHub's public contributions image proxy
    // We'll use the GitHub profile API for stats instead
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
      .then(r => r.json())
      .then(userData => {
        setData({
          repos: userData.public_repos || 0,
          followers: userData.followers || 0,
          following: userData.following || 0,
          avatar: userData.avatar_url,
          bio: userData.bio,
          name: userData.name || GITHUB_USERNAME,
        })
      })
      .catch(() => setData(null))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <section className="github-section">
        <h2 className="github-title">GitHub Activity</h2>
        <div className="github-loading">Loading...</div>
      </section>
    )
  }

  return (
    <section className="github-section">
      <h2 className="github-title">GitHub Activity</h2>
      <p className="github-sub">My coding consistency — contributions over the past year</p>

      {/* Contribution Graph via GitHub's img proxy */}
      <div className="calendar-wrapper">
        <img
          src={`https://ghchart.rshah.org/${GITHUB_USERNAME}`}
          alt={`${GITHUB_USERNAME}'s GitHub contribution graph`}
          className="github-chart-img"
        />
      </div>

      {/* Stats */}
      {data && (
        <div className="github-stats-row">
          <div className="github-mini-stat">
            <span className="github-mini-num">{data.repos}</span>
            <span className="github-mini-label">Repositories</span>
          </div>
          <div className="github-mini-stat">
            <span className="github-mini-num">{data.followers}</span>
            <span className="github-mini-label">Followers</span>
          </div>
          <div className="github-mini-stat">
            <span className="github-mini-num">{data.following}</span>
            <span className="github-mini-label">Following</span>
          </div>
        </div>
      )}
    </section>
  )
}
