import { history } from 'backbone';

export default function(){
	$(document).on('click', 'a[href]', event => {
		const $a = $(event.target).closest('a');
		let href = $a.attr('href') || '';
		// skiping hrefs like "#..", "file:", "mailto:", "http:"
		if (/^(\/\/)|(\w+?:)|#/.test(href)) {
			return;
		}

		event.preventDefault();
		event.stopPropagation();

		if(href.startsWith('/'))
			href = href.substring(1);

		history.navigate(href, { trigger: true });

	});
}
