import ErrorPage from "@/components/ErrorPage";

export const metadata = {
	title: "Page Not Found",
	description:
		"The page you are looking for does not exist. Return to Shahir Ahmed's portfolio homepage.",
	robots: {
		index: false,
		follow: true,
	},
};

export default function NotFound() {
	return <ErrorPage />;
}
