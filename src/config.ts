export const URL_JOKES = import.meta.env.VITE_URL_JOKES ?? 'https://dad-jokes.p.rapidapi.com'

export const JOKES_HEADERS = {
  'X-RapidAPI-Key': import.meta.env.VITE_XRapidAPIKey ??  '56c60d8caemsh89a08a76935a033p1f0117jsnbdc7abc5d95b',
  'X-RapidAPI-Host': import.meta.env.VITE_XRapidAPIHost ??  'dad-jokes.p.rapidapi.com'
}

export const URL_MEMES = import.meta.env.VITE_URL_MEMES ??  'https://api.imgflip.com'

export const IMG_MEMES_USERNAME = import.meta.env.VITE_IMG_MEMES_USERNAME ??  'sarmanulco'
export const IMG_MEMES_PASSWORD = import.meta.env.VITE_IMG_MEMES_PASSWORD ??  'alumno20'