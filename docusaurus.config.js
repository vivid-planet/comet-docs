const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
    module.exports = {
        title: "COMET DXP Docs",
        tagline: "",
        url: "https://docs.comet-dxp.com",
        baseUrl: "/",
        onBrokenLinks: "throw",
        onBrokenMarkdownLinks: "warn",
        favicon: "img/favicon.ico",
        organizationName: "vivid-planet",
        projectName: "comet", // Usually your repo name.

        presets: [
            [
                "@docusaurus/preset-classic",
                /** @type {import('@docusaurus/preset-classic').Options} */
                ({
                    docs: {
                        sidebarPath: require.resolve("./sidebars.js"),
                        // Please change this to your repo.
                        editUrl: "https://github.com/vivid-planet/comet-docs/edit/main/",
                    },
                    blog: {
                        showReadingTime: true,
                        // Please change this to your repo.
                        editUrl: "https://github.com/vivid-planet/comet-docs/edit/main/blog/",
                    },
                    theme: {
                        customCss: require.resolve("./src/css/custom.css"),
                    },
                }),
            ],
        ],

        themeConfig:
            /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
            ({
                navbar: {
                    title: "COMET DXP",
                    logo: {
                        alt: "My Site Logo",
                        src: "img/comet-logo.svg",
                    },
                    items: [
                        {
                            type: "doc",
                            docId: "overview/Overview", //when button Docs is pressed, you get redirected to the doc with this id
                            position: "left",
                            label: "Docs",
                        },
                    ],
                },
                footer: {
                    style: "dark",
                    links: [
                        {
                            title: "More",
                            items: [
                                {
                                    href: "https://github.com/vivid-planet/comet-admin",
                                    label: "GitHub",
                                },
                            ],
                        },
                    ],
                    copyright: `Copyright ?? ${new Date().getFullYear()} Vivid Planet Software GmbH. Built with Docusaurus.`,
                },
                prism: {
                    theme: lightCodeTheme,
                    darkTheme: darkCodeTheme,
                    magicComments: [
                        {
                            className: "theme-code-block-highlighted-line",
                            line: "highlight-next-line",
                            block: { start: "highlight-start", end: "highlight-end" },
                        },
                        {
                            className: "code-block-addition-line",
                            line: "addition-next-line",
                            block: { start: "addition-start", end: "addition-end" },
                        },
                        {
                            className: "code-block-removal-line",
                            line: "removal-next-line",
                            block: { start: "removal-start", end: "removal-end" },
                        },
                    ],
                },
                announcementBar: {
                    id: "work-in-progress",
                    content: "Documentation is a work in progress",
                    backgroundColor: "var(--ifm-color-warning-contrast-background)",
                    textColor: "var(--ifm-color-warning-contrast-foreground)",
                    isCloseable: false,
                },
            }),
    }
);
