import { siteConfig } from './lib/site-config'

export default siteConfig({
	// the site's root Notion page (required)
	rootNotionPageId: '8b2124b203cd4b16bda735fd23ea0be2',

	// if you want to restrict pages to a single notion workspace (optional)
	// (this should be a Notion ID; see the docs for how to extract this)
	rootNotionSpaceId: "a74b214b-710c-4c10-9041-f972a34aa766",

	// Search is not working
	isSearchEnabled: false,

	// basic site info (required)
	name: 'Open AI Sora Videos and Articles | FlowSora',
	domain: 'flowsora.com',
	author: 'flowsora',

	// open graph metadata (optional)
	description:
		'A collection of Open AI Sora videos and articles, the site provides comprehensive information to help you learn more about Sora.',
	// socialImageTitle: 'Misty 项目草稿',
	// socialImageSubtitle: 'Hello World! 👋',

	// social usernames (optional)
	twitter: 'flowsoraai',
	// github: '#',
	linkedin: 'https://www.linkedin.com/company/openflow-ai/about/',

	discord: 'https://discord.gg/KM8Xgg9c',
	// telegram: 'https://t.me/openflowai',

	// mastodon: '#', // optional mastodon profile URL, provides link verification
	// newsletter: '#', // optional newsletter URL
	youtube: '@FlowSora1', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

	// default notion icon and cover images for site-wide consistency (optional)
	// page-specific values will override these site-wide defaults
	defaultPageIcon:
		'https://proxy.openflowai.loan/proxy?proxyUrl=https%3A%2F%2Fwww.notion.so%2Fimage%2Fhttps%253A%252F%252Fprod-files-secure.s3.us-west-2.amazonaws.com%252Fd03b77b2-3061-451e-b34b-db5f21753678%252Ffdaa2786-f47f-48a7-8b5c-534717bc263d%252Fflowsora_logo.png%3Ftable%3Dblock%26id%3D69a5255e-cf23-4e6a-9036-1f28f0967752%26cache%3Dv2',
	defaultPageCover: 'https://transitivebullsh.it/page-cover.jpg',
	defaultPageCoverPosition: 0.5,

	includeNotionIdInUrls: true,

	// whether or not to enable support for LQIP preview images (optional)
	isPreviewImageSupportEnabled: true,

	// whether or not redis is enabled for caching generated preview images (optional)
	// NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
	// environment variables. see the readme for more info
	isRedisEnabled: false,

	// map of notion page IDs to URL paths (optional)
	// any pages defined here will override their default URL paths
	// example:
	//
	// pageUrlOverrides: {
	//   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
	//   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
	// }
	// pageUrlAdditions: {
	//   '/the-social-audio-revolution': 'c4deaf33cc924ad7a5b9f69c6ae04a01'
	// },

	// whether to use the default notion navigation style or a custom one with links to
	// important pages
	navigationStyle: 'custom',
	navigationLinks: [
		{
			title: 'About',
			pageId: '331ec557ca76489cb5d5fab25c2e3f33',
		},
		{
			title: 'Contact',
			pageId: '03a11dc6a8ad4ca7a880104ffabbd109',
		},
	],
})
