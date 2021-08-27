import { useRef, useState } from 'react';
import { FaGlobe, FaCode } from 'react-icons/fa';
import MyProjectsSty from './MyProjects.styles';
import projects from './MyProjects.projects';

const MyProjects = ({ t }) => {
	const myProjectsRef = useRef();
	const [isShowing, setIsShowing] = useState(false);

	return (
		<MyProjectsSty ref={myProjectsRef} isShowing={isShowing}>
			<button
				type="button"
				id="projects-btn"
				onClick={() => setIsShowing(!isShowing)}
			>
				{t('myProjects.tag')}
			</button>
			<div id="projects-box">
				{projects.map(({ id, url, source, screenshot, usedTech }) => (
					<div key={id} className="project-card__container">
						<div className="project-card">
							<h3>{t(`myProjects.${id}.title`)}</h3>
							{screenshot}
							<div className="technologies-used">
								{usedTech.map((tech) => (
									<div
										className="project-tech tooltip"
										key={tech.id}
									>
										{tech.icon}
										<span className="tooltiptext">
											{tech.id}
										</span>
									</div>
								))}
							</div>
							<div className="project-links">
								<a href={url} target="_blank" rel="noreferrer">
									<FaGlobe />
									{t('myProjects.website')}
								</a>
								<a
									href={source}
									target="_blank"
									rel="noreferrer"
								>
									<FaCode />
									{t('myProjects.code')}
								</a>
							</div>
							<p>{t(`myProjects.${id}.description`)}</p>
						</div>
					</div>
				))}
			</div>
		</MyProjectsSty>
	);
};

export default MyProjects;
