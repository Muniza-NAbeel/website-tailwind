
export default function Contact() {
  return (
    <>
      <div className="Contact p-10 bg-pink mt-0" id="Contact">
        <h2 className="text-primary text-4xl font-semibold flex justify-center mt-4 mb-8 space-y-0 sm:text-2xl md:text-4xl">
          Contact <span className="ml-2 text-secondary">Me!</span>
        </h2>

        <form
          action="mailto:your-email@example.com"
          method="POST"
          encType="text/plain"
          className="max-w-fit mx-auto text-center mb-10"
        >
          <div className="input-box flex justify-between flex-wrap">
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-[49%] p-4 text-lg text-pink bg-secondary rounded-lg mb-3"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="w-[49%] p-4 text-lg text-pink bg-secondary rounded-lg mb-3"
            />
          </div>

          <div className="input-box flex justify-between flex-wrap">
            <input
              type="number"
              placeholder="Phone Number"
              required
              className="w-[49%] p-4 text-lg text-pink bg-secondary rounded-lg mb-3"
            />
            <input
              type="text"
              placeholder="Email Subject"
              required
              className="w-[49%] p-4 text-lg text-pink bg-secondary rounded-lg mb-3"
            />
          </div>

          <textarea
            cols={30}
            rows={5}
            placeholder="Your Message Here"
            required
            className="w-full p-4 text-lg text-pink bg-secondary rounded-lg mb-3 resize-none"
          ></textarea>

          <input
            type="submit"
            value="Send Message"
            className="inline-block px-4 py-2 bg-secondary rounded-full text-[1rem] text-primary hover:bg-primary hover:text-white transition duration-300"
          />
        </form>
      </div>
    </>
  );
}
