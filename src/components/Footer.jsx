/**
 * Rendered on every page. Home and about hide it on desktop via CSS, where
 * each closes on its own contact or connect section; on mobile every page
 * keeps it. Doing this in CSS rather than a viewport check in JS avoids a
 * server/client hydration mismatch.
 */
const Footer = () => (
	<footer className="footer" role="contentinfo">
		<p className="footer-legal">
			&copy; {new Date().getFullYear()} Shahir Ahmed &nbsp;&middot;&nbsp;{" "}
			<a
				href="https://github.com/Shahir-47/shahirahmed.com"
				target="_blank"
				rel="noopener noreferrer"
			>
				Source code
			</a>
		</p>
	</footer>
);

export default Footer;
