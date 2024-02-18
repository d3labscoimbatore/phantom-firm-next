import Link from "next/link"


const TestHeader = () => {
  return (
    <header style={{height: "100vh"}}>
        <Link href="/">Logo</Link>
        <nav>
            <ul>
                <li>
                    <Link href="#solutions">Solutions</Link>
                </li>
                <li>
                    <Link href="#about">About</Link>
                </li>
                <li>
                    <Link href="#faq">FAQs</Link>
                </li>
                <li>
                    <Link href="#contact">Say Hello!</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default TestHeader