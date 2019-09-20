import React from 'react'
import Card from './Card'
import styled from 'styled-components/macro'

export default function HomePage({ cards }) {
  const PageStyle = styled.section`
    padding: 20px;
    display: grid;
    align-content: flex - start;
    gap: 20px;
  `

  return (
    <PageStyle>
      <h1>Homepage</h1>
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          question={card.question}
          answer={card.answer}
        />
      ))}
    </PageStyle>
  )
}
