import icon from "@/constant/icon";
import { projectInterface } from "@/stores/useApp";
import { Button, Card, CardBody, Tooltip, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";

interface Props {
	data: projectInterface;
}
interface LinkState {
	repository: string;
	web: string;
}

export default function ProjectItem({ data }: Props) {
	const [link, setLink] = useState<LinkState>({
		repository: "",
		web: ""
	})
	useEffect(() => {
		const commit: LinkState = {
			repository: "",
			web: ""
		};
		for(const value of data.link) {
			if (value.includes("github.com") || value.includes("gitlab.com")) {
				commit.repository = value;
			}
			else {
				commit.web = value;
			}
		}

		setLink(commit);
	}, [data.link])
	return(
		<Card className="flex-1 shadow-none border border-gray-300">
			<CardBody>
				<Typography variant="h6">{data.title}</Typography>
				<Typography variant="paragraph">{data.description}</Typography>
				<div className="flex gap-2 my-4 flex-wrap">
					{data.stack.map(stack => (
						<Tooltip content={stack.toUpperCase()}>
							<img key={stack} className="hover:shadow-md p-1" src={icon[stack.toLowerCase()]} width={32} height={32} alt="icon"/>
						</Tooltip>
					))}
				</div>
				<div className="flex gap-2">
					{(link.repository) ?
						<Tooltip content={link.repository} placement="bottom">
							<Button onClick={() => window.open(link.repository)} size="sm" className="flex items-center gap-2">
								<span className="material-symbols-outlined text-sm">attach_file</span>
								View On Repository
							</Button>
						</Tooltip>
						: false
					}
					{link.web ?
						<Tooltip content={link.web} placement="bottom">
							<Button onClick={() => window.open(link.web)} size="sm" color="blue" className="flex items-center gap-2">
								<span className="material-symbols-outlined text-sm">open_in_new</span>
								Open Project
							</Button>
						</Tooltip>
						: false
					}
				</div>
			</CardBody>
		</Card>
	)
}