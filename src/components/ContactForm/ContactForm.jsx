import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import ContactFormSty from './ContactForm.styles';

const ContactForm = ({ contactFormRef, t }) => {
	const [statusMessage, setStatusMessage] = useState('wait');
	const hideContactForm = () =>
		(contactFormRef.current.style.display = 'none');

	return (
		<ContactFormSty ref={contactFormRef} statusMessage={statusMessage}>
			<div id="contact-form-container">
				<form
					action="https://formspree.io/f/xyylpqnl"
					method="POST"
					target="_blank"
					onSubmit={async (e) => {
						e.preventDefault();

						const frm = e.target;
						try {
							const data = new FormData(e.target);
							await fetch(e.target.action, {
								method: frm.method,
								body: data,
								headers: {
									Accept: 'application/json',
								},
							});

							frm.reset();
							setStatusMessage('ok');
						} catch (err) {
							setStatusMessage('err');
						}
					}}
				>
					<div
						id="form-close-button"
						onClick={hideContactForm}
						onKeyDown={(e) => e.key === 'Esc' && hideContactForm()}
						role="button"
						tabIndex="0"
					>
						<FaTimes />
					</div>
					<h2 id="contact-form-title">{t('contactForm.title')}</h2>
					<label id="contact-form-name-label" htmlFor="form-name">
						{t('contactForm.userName')}
						<input type="text" name="name" className="form-input" />
					</label>
					<label id="contact-form-email-label" htmlFor="form-email">
						{t('contactForm.userMail')}
						<input
							required
							type="email"
							name="_replyto"
							className="form-input"
						/>
					</label>
					<label
						id="contact-form-message-label"
						htmlFor="form-message"
					>
						{t('contactForm.userMessage')}
						<textarea
							required
							name="message"
							id="form-message"
							cols="30"
							rows="10"
							className="form-input"
						/>
					</label>
					<button id="contact-form-submit-button" type="submit">
						{t('contactForm.submitBtn')}
					</button>
					<div id="contact-form-status">
						{t(`contactForm.statusMessage.${statusMessage}`)}
					</div>
				</form>
				<footer id="contact-form-footer">
					{t('contactForm.footer')} ➜ E-mail:
					<a href="mailto: gusvianadev@gmail.com">
						&nbsp;&nbsp;gusvianadev@gmail.com&nbsp;&nbsp;
					</a>
					- Cel: +5491167627688
				</footer>
			</div>
		</ContactFormSty>
	);
};

export default ContactForm;
