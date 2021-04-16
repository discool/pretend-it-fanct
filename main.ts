sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
    pause(1000)
})
let time_alive = 0
let rock: Sprite = null
scene.setBackgroundImage(assets.image`myImage`)
let player1 = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
player1.say("Don't Hit me Please", 2000)
player1.setStayInScreen(true)
controller.moveSprite(player1)
music.setVolume(255)
info.setScore(0)
info.setLife(3)
game.onUpdateInterval(1000, function () {
    info.changeScoreBy(1)
    rock = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . b b b b b f f f f f f . . . . 
        b b 6 6 6 b b f f f f f f f . . 
        b b 6 6 6 b b f f f f f f f . . 
        . b b b b b f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    rock.x += randint(-90, 65)
    rock.y += randint(-90, 65)
    animation.runMovementAnimation(
    rock,
    animation.animationPresets(animation.easeRight),
    5000,
    true
    )
})
game.onUpdateInterval(1000, function () {
    rock = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . f b b f . . . . . . 
        . . . . . . b b b b . . . . . . 
        . . . . . . b 6 6 b . . . . . . 
        . . . . . . b 6 6 b . . . . . . 
        . . . . . . b 6 6 b . . . . . . 
        . . . . . . b b b b . . . . . . 
        . . . . . . . b b . . . . . . . 
        `, SpriteKind.Enemy)
    rock.x += randint(-90, 65)
    rock.y += randint(-90, 65)
    animation.runMovementAnimation(
    rock,
    animation.animationPresets(animation.easeUp),
    2000,
    true
    )
})
game.onUpdateInterval(1000, function () {
    rock = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f b b b b b . 
        . . f f f f f f f b b 6 6 6 b b 
        . . f f f f f f f b b 6 6 6 b b 
        . . . . f f f f f f b b b b b . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    rock.x += randint(-90, 65)
    rock.y += randint(-90, 65)
    animation.runMovementAnimation(
    rock,
    animation.animationPresets(animation.easeLeft),
    2000,
    true
    )
})
game.onUpdateInterval(1000, function () {
    rock = sprites.create(img`
        . . . . . . . b b . . . . . . . 
        . . . . . . b b b b . . . . . . 
        . . . . . . b 6 6 b . . . . . . 
        . . . . . . b 6 6 b . . . . . . 
        . . . . . . b 6 6 b . . . . . . 
        . . . . . . b b b b . . . . . . 
        . . . . . . f b b f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    rock.x += randint(-90, 65)
    rock.y += randint(-90, 65)
    animation.runMovementAnimation(
    rock,
    animation.animationPresets(animation.easeDown),
    2000,
    true
    )
})
forever(function () {
    music.playMelody("C E C5 A B F - E ", 245)
    music.playMelody("C E C5 A B F - E ", 245)
    music.playMelody("C E C5 A B F - E ", 245)
    music.playMelody("C E C5 A B F - E ", 245)
    music.playMelody("D E F E F D - G ", 150)
    music.playMelody("D E F E F D - G ", 150)
    music.playMelody("D E F E F D - G ", 150)
    music.playMelody("D E F E F D - G ", 150)
})
forever(function () {
    time_alive = 0
    pause(1000)
    time_alive += 1
})
