import style from "@styles/routes/Home.module.sass";
import Navigation from "@/components/partial/Navigation";
import useApp, { projectInterface } from "@/stores/useApp";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Carousel,
  IconButton,
  Timeline,
  TimelineBody,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineItem,
  Typography,
} from "@material-tailwind/react";
import Footer from "@/components/partial/Footer";
import { useEffect, useState } from "react";
import ProjectItem from "@/components/project/ProjectItem";
import icon from "@/constant/icon";

export default function Home() {
  const app = useApp();
  const [project, setProject] = useState<projectInterface[][]>([]);
  useEffect(() => {
    setProject(chunkArray(app.projects, 2));
  }, [app.projects]);
  useEffect(() => {
    window.AOS.init();
  }, []);

  const scrollToTarget = (id: string) => () => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <main>
      <Navigation {...{ scrollToTarget }} />
      <section
        id="home"
        className={"app_container " + style.one_section}
        style={{ minHeight: "85vh" }}
      >
        <div className={style.left}>
          <Typography variant="h2">{app.profiles.name}</Typography>
          <Typography variant="h6">{app.profiles.role}</Typography>
          <Typography variant="paragraph" className="mb-4">
            {app.profiles.shortDescription}
          </Typography>
          <Button variant="gradient" onClick={scrollToTarget("about")}>
            Contact Me
          </Button>
        </div>
        <div className={style.right}>
          <img
            src="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGdpcmwlMjBvZmZpY2V8ZW58MHx8MHx8fDA%3D"
            alt="photo"
            className={style.main_img}
          />
        </div>
      </section>
      <div id="about" className="bg-gray-100 p-2">
        <section className="app_container flex justify-center items-center min-h-screen">
          <div>
            <Card
              className="max-w-md"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <CardBody className="text-center">
                <Typography className="mb-2" variant="h3">
                  About
                </Typography>
                <Typography variant="paragraph">
                  {app.profiles.description}
                </Typography>
              </CardBody>
              <CardFooter className="flex justify-center gap-2">
                <Button
                  size="sm"
                  onClick={() => window.open(app.profiles.contacts.email)}
                  className="flex items-center"
                  variant="outlined"
                >
                  <img src={icon["gmail"]} width={32} height={32} alt="icon" />
                </Button>
                <Button
                  size="sm"
                  onClick={() => window.open(app.profiles.contacts.instagram)}
                  className="flex items-center"
                  variant="outlined"
                >
                  <img
                    src={icon["instagram"]}
                    width={32}
                    height={32}
                    alt="icon"
                  />
                </Button>
                <Button
                  size="sm"
                  onClick={() => window.open(app.profiles.contacts.facebook)}
                  className="flex items-center"
                  variant="outlined"
                >
                  <img
                    src={icon["facebook"]}
                    width={32}
                    height={32}
                    alt="icon"
                  />
                </Button>
                <Button
                  size="sm"
                  onClick={() => window.open(app.profiles.contacts.whatsapp)}
                  className="flex items-center"
                  variant="outlined"
                >
                  <img
                    src={icon["whatsapp"]}
                    width={32}
                    height={32}
                    alt="icon"
                  />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </div>
      <section className="app_container p-5">
        <div className={style.root_section_3}>
          <div className="flex-1">
            <Card
              id="study"
              className={style.card}
              data-aos="flip-up"
              data-aos-duration="1500"
              data-aos-delay="100"
            >
              <Typography className={style.title} variant="h3">
                Study
              </Typography>
              <CardBody>
                <Timeline>
                  {app.study.map((item) => (
                    <TimelineItem key={item.name}>
                      <TimelineConnector />
                      <TimelineHeader>
                        <TimelineIcon className="p-2">
                          <span className="material-symbols-outlined text-sm">
                            adjust
                          </span>
                        </TimelineIcon>
                        <Typography variant="h6" color="blue-gray">
                          {item.name}
                        </Typography>
                      </TimelineHeader>
                      <TimelineBody className="pb-8">
                        {item.department ? (
                          <Typography
                            color="gray"
                            className="font-normal text-gray-600"
                          >
                            {item.department}
                          </Typography>
                        ) : (
                          false
                        )}
                        <Typography
                          color="gray"
                          className="font-normal text-gray-600"
                        >
                          {item.year}
                        </Typography>
                      </TimelineBody>
                    </TimelineItem>
                  ))}
                </Timeline>
              </CardBody>
            </Card>
          </div>
          <div className="flex-1">
            <Card
              id="experience"
              className={style.card}
              data-aos="flip-down"
              data-aos-duration="1500"
              data-aos-delay="500"
            >
              <Typography className={style.title} variant="h3">
                Experience
              </Typography>
              <CardBody>
                <Timeline>
                  {app.experience.map((item) => (
                    <TimelineItem key={item.company}>
                      <TimelineConnector />
                      <TimelineHeader>
                        <TimelineIcon className="p-2">
                          <span className="material-symbols-outlined text-sm">
                            adjust
                          </span>
                        </TimelineIcon>
                        <Typography variant="h6" color="blue-gray">
                          {item.company}
                        </Typography>
                      </TimelineHeader>
                      <TimelineBody className="pb-8">
                        <Typography
                          color="gray"
                          className="font-normal text-gray-600"
                        >
                          {item.role}, {item.during}
                        </Typography>
                        {item.task.map((task) => (
                          <Typography variant="small" className="mt-4">
                            - {task}
                          </Typography>
                        ))}
                      </TimelineBody>
                    </TimelineItem>
                  ))}
                </Timeline>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
      <section id="projects" className="p-5">
        <div className="app_container">
          <Typography variant="h3" className="mb-4">
            Projects
          </Typography>
        </div>
        <Carousel
          className={[style.carousel, "carousel"].join(" ")}
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handlePrev}
              className="!absolute bottom-0 left-4 md:top-2/4 md:-translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handleNext}
              className="!absolute bottom-0 !right-4 md:top-2/4 md:-translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </IconButton>
          )}
        >
          {project.map((item, key) => (
            <div key={key} className="app_container pb-10">
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                {item.map((projectRow) => (
                  <ProjectItem key={projectRow.title} data={projectRow} />
                ))}
              </div>
            </div>
          ))}
        </Carousel>
      </section>
      <Footer />
    </main>
  );
}

function chunkArray(arr: any[], size: number): any[] {
  const chunkedArray = [];
  let index = 0;

  while (index < arr.length) {
    chunkedArray.push(arr.slice(index, index + size));
    index += size;
  }

  return chunkedArray;
}
