

interface homeProps {
  title: string;
  text: string;
}
function Home(props: homeProps) {
  return (
    <>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
    </>
  )
}

export default Home