const url = process.argv[2];
const fs = require('fs');
const blog = JSON.parse(fs.readFileSync('blog.json').toString());

fs.writeFileSync('rss.xml', `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>freaknog supreme</title>
    <link>${url}blog.html</link>
    <description>oh yeah baby you know im freaknogging it</description>
    <language>en-us</language>
    <lastBuildDate>${new Date(Math.max(...blog.map(item => Number(item.time)))).toUTCString()}</lastBuildDate>
    ${blog.sort((a, b) => Number(b.time) - Number(a.time)).map(item => `<item>
      <guid>${item.id}</guid>
      <title><![CDATA[${item.title}]]></title>
      <description></description>
      <pubDate>${new Date(Number(item.time)).toUTCString()}</pubDate>
      <link>${url}blog.html#${encodeURIComponent(item.id)}</link>
    </item>`).join("\n")}
  </channel>
</rss>`);