import { Typography } from "@material-tailwind/react";

export default function Footer() {
	return(
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 p-6 text-center md:justify-between">
      <Typography color="blue-gray" className="font-normal">
        &copy; 2023 It's Me
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="https://github.com/ferdiansyah0611/its-me"
            target="_blank"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contribute
          </Typography>
        </li>
      </ul>
    </footer>
	)
}