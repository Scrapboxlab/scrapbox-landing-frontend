// Key pública de web3forms.com — recibe los envíos en scrapboxgo@gmail.com
export const WEB3FORMS_KEY = 'a54b0c04-2c51-45f9-ab3d-4e7a5a1efd1e'

export const inputClass = [
  'w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3',
  'text-white text-[15px] placeholder:text-white/30',
  'focus:outline-none focus:border-[#EB6700]/50 focus:bg-white/[0.07]',
  'transition-all duration-200',
].join(' ')

export async function submitWeb3Form(fields) {
  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ access_key: WEB3FORMS_KEY, ...fields }),
  })
  return res.json()
}
