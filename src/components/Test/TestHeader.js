import Link from "next/link";

const TestHeader = () => {
  return (
    <header>
      <div className="logo">
        <Link href="/">Logo</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="#solutions">Solutions</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#faq">Faqs</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default TestHeader;
