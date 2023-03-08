
const $ = document.querySelector.bind(document) 
const $all = document.querySelectorAll.bind(document)
const onChangeRangesRGBA = () => {
    const red = $('#red').value 
    const green = $('#green').value
    const blue = $('#blue').value
    const alpha = $('#alpha').value 
    
    $(
        '#color-display-rgba'
    ).style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`
}

$all('#color-ranges-rgba input[type=range]').forEach((range) => (range.oninput = onChangeRangesRGBA))

const onChangeRangesHsl = () => {
    const hue = $('#hue').value
    const saturation = $('#saturarion').value
    const lightness = $('#lightness').value

    $(
    '#color-display-hsl'
).style.backgroundColor = `hsl(${hue}, ${saturation}%,${lightness}% )`

}

$all('#color-ranges-hsl input[type=range]').forEach((range) => (range.oninput = onChangeRangesHsl))

