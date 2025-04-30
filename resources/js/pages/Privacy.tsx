const PrivacyPolicy = () => {
    return (
        <div className="mx-auto max-w-3xl px-4 py-10 text-gray-800">
            <h1 className="mb-6 text-center text-4xl font-bold">Privacy Policy</h1>

            <p className="mb-4">
                This Privacy Policy explains how we handle information when you use our mobile application and website. By accessing our services, you
                agree to the practices described in this policy.
            </p>

            <h2 className="mt-8 mb-3 text-2xl font-semibold">Information We Collect</h2>
            <p className="mb-4">
                We do not collect, store, or process any personal information from users of our mobile app. The app solely displays news and events
                content published from our official website.
            </p>

            <h2 className="mt-8 mb-3 text-2xl font-semibold">How We Use Information</h2>
            <p className="mb-4">
                Since no personal data is collected, we do not use or share any user information. The app simply retrieves and displays public news
                and event posts from our website.
            </p>

            <h2 className="mt-8 mb-3 text-2xl font-semibold">Third-Party Services</h2>
            <p className="mb-4">
                Our application does not integrate with third-party services that collect user information. However, the website content displayed in
                the app may contain links to external sites. We are not responsible for the privacy practices of those external sites.
            </p>

            <h2 className="mt-8 mb-3 text-2xl font-semibold">Changes to This Policy</h2>
            <p className="mb-4">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
            </p>

            <h2 className="mt-8 mb-3 text-2xl font-semibold">Contact Us</h2>
            <p className="mb-4">
                If you have any questions or concerns about this Privacy Policy, feel free to contact us through our official website.
            </p>
            <a className="underline" href="https://www.redcross.org.kh/">
                https://www.redcross.org.kh/
            </a>

            <p className="mt-6 text-sm text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
    );
};

export default PrivacyPolicy;
