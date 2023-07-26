import { Component } from 'component';
import { STATIC_ROOT } from 'environment';

class I18n extends Component {
	async init(countryCode) {
		if (countryCode && this.countryCodes.has(countryCode))
		{
			console.info(`[I18n.init] "${countryCode}"`);
			const translations = await this.requestTranslations(countryCode);
			if (translations) this.translations = translations;
		}
	}

	get translations() {
		if (this._translations) return this._translations;
		return new Map();
	}
	set translations(translations) {
		if (translations) this._translations = translations;
	}

	resolveString(string) {
		return string;
	}

	resolveItemTitle(id) {
		const item = this.translations.get(id);
		// console.log(`[resolveItemTitle]`, id, item)
		if (item && item.title !== undefined) return item.title;
	}

	resolveItemDescription(id) {
		const item = this.translations.get(id);
		if (item && item.desc !== undefined) return item.desc;
	}

	async requestTranslations(countryCode) {
		if (!countryCode || !this.countryCodes.has(countryCode))
		{
			console.warn(`[I18n.requestTranslations] country code not supported "${countryCode}"`);
			return;
		}

		const response = await fetch(`${STATIC_ROOT}i18n/progression_${countryCode}.json`);
		if (!response || !response.ok)
		{
			console.error(`[I18n.requestTranslations] error getting  "${countryCode}"`);
			return;
		}

		const json = await response.json();
		if (json && Array.isArray(json))
		{
			console.info(`[I18n.requestTranslations] loaded "${countryCode}"`)
			const translations = new Map(json);
			return translations;
		}
	}

	get countryCodes() {
		return this._countryCodes??= new Set([
			"en-US",
			"cs-CZ",
			"da-DK",
			"de-DE",
			"el-GR",
			"es-ES",
			"es-MX",
			"fi-FI",
			"fr-FR",
			"hu-HU",
			"it-IT",
			"ja-JP",
			"ko-KR",
			"nb-NO",
			"nl-NL",
			"pl-PL",
			"pt-BR",
			"pt-PT",
			"ru-RU",
			"sv-SE",
			"tr-TR",
			"zh-CN",
			"zh-TW"
		])
	}
}

export const i18n = new I18n();