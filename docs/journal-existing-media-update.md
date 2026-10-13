# Existing media expansion — 13 October 2026

All ten existing Journal stories now include two additional, independently credited images and one related YouTube video. No new images were generated. The previously published illustrated covers and original diagrams remain.

Twenty added images come from Wikimedia Commons and institutional open collections: Pera Museum artwork, Rijksmuseum photography, historical coffeehouse art/maps, botanical illustration, wildlife, processing equipment and brewing photographs. Rights were checked through Commons file descriptions and the imageinfo API before download. Creator, source link, licence link and conversion notice are visible beneath every image. Images were resized without cropping, converted to WebP and visually reviewed in a contact sheet. Source dimensions, original URLs and SHA-256 hashes are retained in `journal-existing-media-ledger.json`.

Historical captions distinguish the date of the depicted material from earlier events in the article. Botanical/animal/process photos are not represented as evidence of a specific farm, laboratory measurement, worker legal status or coffee lot beyond what their source establishes. Decaf illustrations include a documented Swiss Water coffee sack and a documented decaf drink.

Videos are selected from Go Türkiye, BBC Learning English, TED-Ed, The Civet Project, World Coffee Research, SwissWater Decaf, Re:co Symposium and James Hoffmann. Exact titles, creators, watch links and embed availability were checked through YouTube oEmbed. Producer explanations and dated investigations are identified in the accompanying notes. The civet investigation's animal-distress content is identified before playback.

Players load a YouTube no-cookie iframe on an explicit play action, with a direct YouTube fallback link. Closing a player restores its poster. Switching stories, returning to the index or closing the homepage dialog removes active YouTube frames and pauses local video, preventing hidden playback. The page and article URL remain unchanged during playback and reading-screen changes.

Validation covers twenty rendered figures, captions/credits/licences, local media files, ten player/fallback pairs, chapter/story targets, IDs and matching ImageObject/VideoObject schema. Browser QA checks desktop/mobile image layout, opening/closing and teardown of embedded players, and the homepage modal experience. Required repository CI and production verification remain part of publication.
