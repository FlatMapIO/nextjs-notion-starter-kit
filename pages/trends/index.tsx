import Script from 'next/script'

export default function Page() {
	return (
		<div>
			<Script
				type='text/javascript'
				src='https://ssl.gstatic.com/trends_nrtr/3620_RC01/embed_loader.js'
				onReady={() => {
					const ts = window.location.search.includes('ts=1')
					const map = window.location.search.includes('map=1')

					// @ts-ignore
					const embed: any = trends.embed
					console.log(ts, map, embed)

					if (ts) {
						embed.renderExploreWidget(
							'TIMESERIES',
							{
								comparisonItem: [
									{ keyword: 'openai sora', geo: '', time: 'today 12-m' },
								],
								category: 0,
								property: '',
							},
							{
								exploreQuery: 'q=openai%20sora&hl=en&date=today 12-m',
								guestPath: 'https://trends.google.com:443/trends/embed/',
							},
						)
					}
					if (map) {
						embed.renderExploreWidget(
							'GEO_MAP',
							{
								comparisonItem: [
									{ keyword: 'openai sora', geo: '', time: 'today 12-m' },
								],
								category: 0,
								property: '',
							},
							{
								exploreQuery: 'q=openai%20sora&hl=en&date=today 12-m',
								guestPath: 'https://trends.google.com:443/trends/embed/',
							},
						)
					}
				}}
			/>
		</div>
	)
}
