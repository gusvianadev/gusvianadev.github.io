import NavBarSty from './NavBar.styles';
import NavBarFn from './NavBar.functions';

const NavBar = ({ contactFormRef }) => {
	const { nvItems } = NavBarFn();
	const showContactForm = () =>
		(contactFormRef.current.style.display = 'flex');

	return (
		<NavBarSty>
			<ul>
				{nvItems.map((item) => (
					<li
						key={item.id}
						onClick={showContactForm}
						onKeyDown={(e) => e.key === 'c' && showContactForm()}
					>
						{item.url ? (
							<a
								className="navbar-item"
								href={item.url}
								target="_blank"
								rel="noreferrer"
							>
								{item.id}
								<div className="navbar-bubble">{item.icon}</div>
							</a>
						) : (
							<div className="navbar-item">
								{item.id}
								<div className="navbar-bubble">{item.icon}</div>
							</div>
						)}
					</li>
				))}
			</ul>
		</NavBarSty>
	);
};

export default NavBar;
