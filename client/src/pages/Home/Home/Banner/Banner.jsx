

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/LtWKNh2/scott-graham-5f-Nm-Wej4t-AA-unsplash.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Survey App</h1>
      <p className="mb-5 font-poppins">By conducting survey on our application T Market products, I can see which products are currently in the market and which products will come to the market in the future. I tell our cast members after researching how long they can stay in the market. They do whatever they want.</p>
      <button className="btn btn-primary">overview and explore</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Banner;