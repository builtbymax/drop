'use server';

import ogs from 'open-graph-scraper';

const getOGData = async (url?: string | null) => {
  if (!url) return null;

  const userAgent = setUserAgentBasedOnPlatform(url);
  const setUserAgentIfNotNull = userAgent ? { 'User-Agent': userAgent } : null;
  const options = { url: url, fetchOptions: { 
    headers: { 
      ...(setUserAgentIfNotNull ?? {}),
      'Sec-Fetch-Dest': 'document',
      'Sec-Fetch-Mode': 'navigate',
      'Sec-Fetch-Site': 'same-origin',
      'Sec-Fetch-User': '?1',
    }},
    //onlyGetOpenGraphInfo: true,
  };
  const result = ogs(options)
    .then((data) => {
      const { error, result } = data;
      if (error) return;
      return result;
    }).catch(() => {
      return null;
    })

  return result;
};

export default getOGData;


const setUserAgentBasedOnPlatform = (url: string) => {
  // check if url includes youtube, twitter, instagram and based on that set user agent and return
  if (url.includes ('youtube')) {
    return 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)';
  } else if (url.includes('twitter')) { 
    return 'Mozilla/5.0 (compatible; Twitterbot/1.0)';
  } else if (url.includes('instagram')) {
    return null;
  }

  return 'Mozilla/5.0 (compatible; Discordbot/2.0; +https://discordapp.com)';
};