import Link from "next/link";

const TestHeader = () => {
  return (
    <div>
      <div style={{ display: "inline-block", height: "100vh" }}>
        <Link href="#about">Settings</Link>
      </div>

      <section id="about" style={{ height: "100vh" }}>About</section>
    </div>
  );
};

export default TestHeader;
