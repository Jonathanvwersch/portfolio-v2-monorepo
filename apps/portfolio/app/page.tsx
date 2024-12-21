import Image from "next/image";
import ProfilePhoto from "../public/images/profile-photo.webp";

export default function Home() {
  return (
    <>
      <h1 className="font-bold mb-4 text-center">JONATHAN VAN WERSCH</h1>{" "}
      <p className="mb-4">
        Hello, my name is Jonathan! I come from a mixed background — I was born
        in the United States but my father is from the Netherlands and my mother
        is from Egypt. Growing up I moved around a lot, living in five different
        countries by the time I finished school.
      </p>
      <div className="flex items-center mb-4 w-[300px] h-[225px]">
        <Image
          src={ProfilePhoto}
          alt="Profile picture Jonathan van Wersch"
          width={300}
          height={225}
          priority
          className="rounded-lg mr-4"
        />
      </div>
      <p className="mb-4">
        In July of 2020, I graduated with a bachelors and masters in mechanical
        engineering from the University of Bath receiving first-class honours —
        my passion, however, lies in software. Programming gives me the ability
        to bring my ideas to life. I find it to be a far more exciting field
        than mechanical engineering, which often moves more slowly.
        <br /> <br /> I am, for better or worse, entirely self taught when it
        comes to computer science. I have never done a bootcamp or a single,
        formal computer science course in my life. I have, however, spent a
        significant amount of time on my own teaching myself data structures and
        algorithms, the basics of operating systems, compilers and computer
        architecture, system design, the design of distributed systems, and
        other core computer science topics. What I lack in formal education, I
        make up with a desire to learn and improve that exceeds the majority of
        people I know.
        <br /> <br />I am currently working at Meta in the mobile ads team.
        Outside of work, I love exercising and staying healthy — I am an avid
        runner and sports player. I also love working on programming-related
        side projects.
      </p>
    </>
  );
}
