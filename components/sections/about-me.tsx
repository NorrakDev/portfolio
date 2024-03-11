import Image from "next/image";

import NorrakFullPose from "/public/images/norrak-full-pose.jpg";
import Tag from "@/components/data-display/tag";
import Container from "@/components/layout/container";
import Typography from "@/components/general/typography";

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={NorrakFullPose}
              alt="Fullpose of Norrak"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: "cover" }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            Curious about me? Here you have it:
          </Typography>
          <Typography>
            I&apos;m a passionate, developer with a focus on full stack
            development. primarily specializing in front-end technologies such
            as React.js, Vue.js, Angular.js, and more. I am enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </Typography>
          <Typography>
            I began my journey as a web developer in 2021, and since then,
            I&apos;ve continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now
            in my mid-twenties, 3 years after starting my web development
            journey, I&apos;m building cutting-edge web applications using
            modern technologies such as Nuxt.js, Next.js, TypeScript, Nestjs,
            Angular, Tailwindcss and much more.
          </Typography>
          <Typography>
            In addition to my development skills, I have a keen interest in web
            scraping, allowing me to gather and analyze data efficiently for
            various purposes.
          </Typography>
          <Typography>
            I approach projects holistically, from ideation to development, as
            I&apos;m a progressive thinker who enjoys the end-to-end process of
            product creation.
          </Typography>
          <Typography>Some quick facts about me:</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                B.E. in Computer Engineering
              </Typography>
              <Typography component="li">
                Front-end with backend exp.
              </Typography>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                Enjoys animations & interactive design
              </Typography>
              <Typography component="li">
                Skilled in web scraping for data.
              </Typography>
            </ul>
          </div>
          <Typography>
            Feel free to reach out and say hello—I promise I don&apos;t bite 😉 You
            can follow my tech-related insights and projects on Twitter or
            connect with me on LinkedIn.
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
