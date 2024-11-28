

const Header = () => {
  return (
        <div
    className="hero min-h-[50vh] "
    style={{
        backgroundImage: "url(https://t3.ftcdn.net/jpg/00/67/70/40/360_F_67704008_fxdmJ8wDOqDYts9P3tzdbxqZf8NfWT21.jpg)",
    }}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
        <p className="mb-5">
            You can find people who are ready to help you when you need blood
        </p>
        <button className="btn btn-primary">Get Started</button>
        </div>
    </div>
    </div>
  )
}

export default Header
