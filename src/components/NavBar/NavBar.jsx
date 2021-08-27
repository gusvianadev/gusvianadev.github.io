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
					<li
						key={id}
						onClick={() => !url && showContactForm()}
						onKeyDown={(e) =>
							!url && e.key === 'c' && showContactForm()
						}
					>
						{url ? (
							<a
								className="navbar-item"
								href={url}
								target="_blank"
								rel="noreferrer"
							>
								{id}
								<div className="navbar-bubble">{icon}</div>
							</a>
						) : (
							<div className="navbar-item">
								{id}
								<div className="navbar-bubble">{icon}</div>
							</div>
						)}
					</li>
				))}
			</ul>
		</NavBarSty>
	);
};

export default NavBar;
