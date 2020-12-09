export function stars(num) {
    let stars = ""
    for (let i = 0; i < num; ++i) {
        stars += "⭐"
    }
    return stars
}