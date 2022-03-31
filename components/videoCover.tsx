export const VideoCover = () => {
  return (
    <section className="h-[10rem] sm:h-[16rem] md:h-[32rem] bg-strong-blue overflow-hidden relative flex justify-center items-center border-b-4 border-strong-yellow">
      <video
        id="background-video"
        autoPlay
        loop
        muted
        poster="https://assets.codepen.io/6093409/river.jpg"
        className="w-full h-[10rem] sm:h-[16rem] md:h-[32rem] object-cover absolute z-10"
      >
        <source
          src="https://static.videezy.com/system/resources/previews/000/020/188/original/hanteln1.mp4"
          type="video/mp4"
        />
      </video>
      <img
        src="/logos/complete.png"
        className="w-24 sm:w-40 md:w-80 z-20"
        alt="Logo Strong Games Boca 2022"
      />
    </section>
  )
}
