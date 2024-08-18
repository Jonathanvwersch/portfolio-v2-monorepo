import Image from "next/image";
import ProfilePhoto from "../public/images/profile-photo.webp";

export default function Home() {
  return (
    <main>
      <h1 className="font-bold mb-4">JONATHAN VAN WERSCH</h1>{" "}
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
        In July of 2020, I graduated with an integrated masters in mechanical
        engineering from the University of Bath receiving first-class honours —
        my passion, however, lies in software. Programming gives me the ability
        to bring my ideas to life. I find it to be a far more exciting field
        than mechanical engineering, which often moves more slowly.
        <br /> <br />I am currently working as a senior software engineer at
        Improbable, which creates new ways to connect, play, create and build
        value across interconnected virtual worlds. Outside of work, I love
        exercising and staying healthy — I am an avid runner and sports player.
        I also love to work on engineering-related side projects.
      </p>
    </main>
  );
}
