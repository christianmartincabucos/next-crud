import React, { CSSProperties } from 'react'
import { Html, Body, Container, Link, Tailwind, Text, Preview } from '@react-email/components';
const WelcomeTemplate = ({name}: {name: string}) => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Tailwind>
        <Body className="bg-white">
          <Container>
            <Text className='font-bold text-3xl'>Hello world!</Text>
            <Link href="https://www.linkedin.com/in/christian-martin-cabucos-1ba642155/">Christian Martin Cabucos LinkedIn Profile</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default WelcomeTemplate