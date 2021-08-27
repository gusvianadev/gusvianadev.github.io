import NavBarSty from './NavBar.styles';
import NavBarFn from './NavBar.functions';

const NavBar = ({ contactFormRef, t }) => {
	const { nvItems } = NavBarFn({ t });
	const showContactForm = () =>
		(contactFormRef.current.style.display = 'flex');

	return (
		<NavBarSty>
			<ul>
				{nvItems.map(({ id, url, icon }) => (
					<li key={id}>
						{url ? (
							<>
								<a
									className="navbar-item"
									href={url}
									target="_blank"
									rel="noreferrer"
								>
									{id}
								</a>
								<div className="navbar-bubble">{icon}</div>
							</>
						) : (
							<>
								<div
									className="navbar-item"
									onClick={() => !url && showContactForm()}
									onKeyDown={(e) =>
										!url &&
										e.key === 'c' &&
										showContactForm()
									}
									role="button"
									tabIndex="0"
								>
									{id}
								</div>
								<div className="navbar-bubble">{icon}</div>
							</>
						)}
					</li>
				))}
			</ul>
		</NavBarSty>
	);
};

export default NavBar;
