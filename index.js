function superbowlWin(array){
    const win = array.find((element) => element.result === "W")
    return !!win ? win.year : undefined
}