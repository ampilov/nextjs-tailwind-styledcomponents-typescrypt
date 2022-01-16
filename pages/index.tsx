import tw from "twin.macro"

export default function Home() {
  return (
    <Wrapper>
      <Heading_1> This project configured for using Next.js + tailwindCSS + styled-components + TS </Heading_1>
    </Wrapper>
  )
}

const Wrapper = tw.div`
h-[100vh]
flex
justify-center
bg-indigo-200
`
const Heading_1 = tw.h1`
text-3xl
font-bold
self-center
`