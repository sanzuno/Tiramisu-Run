class UIManager {

    displayBlinkingUIMessage(content, position) {
        const message = add([
            text(content, {
                size: 24,
                font: "Round"
            }),
            area(),
            anchor("center"),
            pos(position),
            opacity(),
            state("flash-up", ["flash-up", "flash-down"]),
        ])

        message.onStateEnter("flash-up", async () => {
            await tween(
                message.opacity,
                0,
                0.5,
                (opacity) => (message.opacity = opacity),
                easings.linear
            )
            message.enterState("flash-down")
        })

        message.onStateEnter("flash-down", async () => {
            await tween(
                message.opacity,
                1,
                0.5,
                (opacity) => (message.opacity = opacity),
                easings.linear
            )
            message.enterState("flash-up")
        })
    }

    displayMainMenu() {
        add([
            sprite("forest-background"),
            scale(4)
        ])
        add([
            sprite("logo"),
            area(),
            anchor("center"),
            pos(center().x, center().y - 200),
            scale(0.5)
        ])

        this.displayBlinkingUIMessage(
            "press [ Enter ] to Start Game",
            vec2(center().x, center().y + 100)
        )

        onKeyPress("enter", () => {
            go("controls")
        })
    }
}

export const uiManager = new UIManager()