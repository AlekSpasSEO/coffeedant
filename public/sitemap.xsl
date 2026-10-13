<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <xsl:output method="html" encoding="UTF-8"/>
  <xsl:template match="/">
    <html lang="en"><head><title>Coffeedant XML Sitemap</title><meta name="robots" content="noindex"/><meta name="viewport" content="width=device-width,initial-scale=1"/>
      <style>body{font-family:system-ui,sans-serif;max-width:1100px;margin:40px auto;padding:0 20px;color:#242420}a{color:#274924}table{width:100%;border-collapse:collapse}td,th{padding:12px;text-align:left;border-bottom:1px solid #ddd}th{background:#f3da00}td:first-child{overflow-wrap:anywhere}h1{font-size:30px}</style>
    </head><body><h1>Coffeedant XML Sitemap</h1><p>This file helps search engines discover canonical pages and their images.</p>
      <xsl:choose><xsl:when test="s:sitemapindex"><table><tr><th>Sitemap</th><th>Last significant update</th></tr><xsl:for-each select="s:sitemapindex/s:sitemap"><tr><td><a href="{s:loc}"><xsl:value-of select="s:loc"/></a></td><td><xsl:value-of select="s:lastmod"/></td></tr></xsl:for-each></table></xsl:when>
      <xsl:otherwise><p><xsl:value-of select="count(s:urlset/s:url)"/> canonical URLs</p><table><tr><th>Page</th><th>Last significant update</th><th>Images</th></tr><xsl:for-each select="s:urlset/s:url"><tr><td><a href="{s:loc}"><xsl:value-of select="s:loc"/></a></td><td><xsl:value-of select="s:lastmod"/></td><td><xsl:value-of select="count(image:image)"/></td></tr></xsl:for-each></table></xsl:otherwise></xsl:choose>
    </body></html>
  </xsl:template>
</xsl:stylesheet>
