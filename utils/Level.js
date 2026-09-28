export class Level {

    drawMapLayout(levelLayout, mappings) {
        const layerSettings = {
            tileWidth: 16,
            tileHeight: 12,
            tiles: mappings
        }

        this.map = []
        for (const layerLayout of levelLayout) {
            this.map.push(addLevel(layerLayout, layerSettings))
        }

        for (const layer of this.map) {
            layer.use(scale)
        }

    }
    drawBackgroud(bgSpriteName) {
        add([sprite(bgSpriteName), fixed(), scale(4)])
    }
}